<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-slider
          v-model="userVehicle.selectedGear"
          :tick-labels="['1', '2', '3', '4', '5', '6']"
          step="1"
          min="1"
          max="6"
          ticks="always"
          tick-size="6"
          v-on:click="emit"
        ></v-slider>
      </v-row>
      <v-row justify="center">
        <v-menu>
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn color="primary" dark v-on="{ ...tooltip, ...menu }">Vehicle Presets</v-btn>
              </template>
              <span>This will auto-fill and overwrite the data below.</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="overwrite18EcoMustang">2018 Ecoboost Mustang (Manual)</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="overwrite03v6Mustang">2003 v6 Mustang (Manual)</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="overwrite20CivicSi">2020 Civic Si Coupe (Manual)</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.transmissionFinalDrive"
            :rules="numberRules"
            hint="This is the gear ratio at the rear axle."
            persistent-hint
            suffix=":1"
            label="Final Drive Ratio"
            required
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.firstGearRatio"
            suffix=":1"
            label="1st"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.secondGearRatio"
            suffix=":1"
            label="2nd"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.tireDiameter"
            :rules="numberRules"
            hint="Tire Diameter in Inches, not rim size."
            persistent-hint
            label="Tire Diameter"
            required
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.thirdGearRatio"
            suffix=":1"
            label="3rd"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.fourthGearRatio"
            suffix=":1"
            label="4th"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="calculateTireDiameter"
            v-model="sectionWidth"
            suffix="/"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="calculateTireDiameter"
            v-model="aspectRatio"
            suffix="R"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="calculateTireDiameter"
            v-model="rimDiameter"
            suffix="/"
            required
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.fifthGearRatio"
            suffix=":1"
            label="5th"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field
            v-on:keyup="emit"
            v-model="userVehicle.sixthGearRatio"
            suffix=":1"
            label="6th"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "GaugeExpansion",
  props: ["userVehicleProp"],
  methods: {
    // Auto-fill methods
    overwrite20CivicSi() {
      this.userVehicle = {
        tireDiameter: "25.4",
        selectedGear: "1",
        transmissionFinalDrive: "4.350",
        firstGearRatio: "3.643",
        secondGearRatio: "2.080",
        thirdGearRatio: "1.361",
        fourthGearRatio: "1.024",
        fifthGearRatio: "0.830",
        sixthGearRatio: "0.686"
      };
       this.emit()
    },
    overwrite03v6Mustang() {
      this.userVehicle = {
        tireDiameter: "25.7",
        selectedGear: "1",
        transmissionFinalDrive: "3.27",
        firstGearRatio: "3.35",
        secondGearRatio: "1.99",
        thirdGearRatio: "1.33",
        fourthGearRatio: "1.00",
        fifthGearRatio: "0.68",
        sixthGearRatio: ""
      };
       this.emit()
    },
    overwrite18EcoMustang() {
      this.userVehicle = {
        tireDiameter: "27.3",
        selectedGear: "1",
        transmissionFinalDrive: "3.31",
        firstGearRatio: "4.236",
        secondGearRatio: "2.538",
        thirdGearRatio: "1.665",
        fourthGearRatio: "1.238",
        fifthGearRatio: "1.00",
        sixthGearRatio: "0.834"
      };
      this.emit()
    },

    // Handling state
    emit() {
      this.$emit("updated", this.userVehicle);
    },
    calculateTireDiameter() {
      if (
        this.rimDiameter != "" &&
        this.aspectRatio != "" &&
        this.sectionWidth != ""
      ) {
        //25.4mm to inch
        let sectionWidthInches = this.sectionWidth / 25.4;
        // Cut aspect ratio down to 0.<aspectRatio>
        let sectionHeightResult =
          sectionWidthInches * (this.aspectRatio * 0.01);
        let rawDiameter = sectionHeightResult * 2 + parseInt(this.rimDiameter);
        this.userVehicle.tireDiameter = rawDiameter.toFixed(1);
        this.emit();
      } else {
        // pass
      }
    }
  },
  data: function() {
    return {
      // Data and Validity
      valid: false,
      rimDiameter: "",
      aspectRatio: "",
      sectionWidth: "",
      userVehicle: {
        tireDiameter: "",
        selectedGear: "",
        transmissionFinalDrive: "",
        firstGearRatio: "",
        secondGearRatio: "",
        thirdGearRatio: "",
        fourthGearRatio: "",
        fifthGearRatio: "",
        sixthGearRatio: ""
      },
      numberRules: [v => !!v || "Value is Required"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
