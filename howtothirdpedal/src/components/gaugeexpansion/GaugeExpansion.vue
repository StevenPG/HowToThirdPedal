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
  methods: {
    emit() {
      this.$emit("updated", this.userVehicle);
    },
    calculateTireDiameter() {
      if(this.rimDiameter != "" && this.aspectRatio != "" && this.sectionWidth != ""){
        //25.4mm to inch
        let sectionWidthInches = this.sectionWidth / 25.4
        console.log(sectionWidthInches)
        // Cut aspect ratio down to 0.<aspectRatio>
        let sectionHeightResult = sectionWidthInches * (this.aspectRatio * 0.01)
        console.log(sectionHeightResult)
        let rawDiameter = (sectionHeightResult * 2) + parseInt(this.rimDiameter)
        this.userVehicle.tireDiameter = rawDiameter.toFixed(1)
        this.emit()
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
