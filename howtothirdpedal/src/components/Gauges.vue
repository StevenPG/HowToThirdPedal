<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div class="overline" dark v-on="on">What is this?</div>
          </template>
          <span>
            Expand the option at the bottom to enter your vehicle information.
            <br />See what speed you'll go at what RPM in each gear!
          </span>
        </v-tooltip>
        <v-row>
          <v-col cols="6">
            <v-gauge
              :minValue="tach.min"
              :maxValue="tach.max"
              :options="tach.opts"
              :value="calculations.revolutionsPerMinute"
            />
            <v-slider
              v-model="calculations.revolutionsPerMinute"
              :min="tach.min"
              :max="tach.max"
              thumb-label
              v-on:click="calculateMPHUsingCurrentData"
            ></v-slider>
            <br />
            <p>Tachometer</p>
          </v-col>
          <v-col cols="6">
            <v-gauge
              :minValue="speedo.min"
              :maxValue="speedo.max"
              :options="speedo.opts"
              :value="calculations.milesPerHour"
            />
            <v-slider
              v-model="calculations.milesPerHour"
              :min="speedo.min"
              :max="speedo.max"
              thumb-label
              v-on:click="calculateRPMUsingCurrentData"
            ></v-slider>
            <br />
            <p>Speedometer</p>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-text-field
          v-model="searchQuery"
          label="Search Make and Model"
          placeholder="Ex. 2018 Ford Mustang"
          :append-outer-icon="'mdi-cloud-search-outline'"
          @click:append-outer="performSearch"
        ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="blue" text @click="show=!show">Enter Transmission Data</v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <GaugeExpansion @updated="calculateFromExpansion" />
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import VGauge from "vgauge";
import GaugeExpansion from "./gaugeexpansion/GaugeExpansion.vue";

export default {
  components: {
    VGauge,
    GaugeExpansion
  },
  name: "Gauges",
  methods: {
    /** Google Search Proxy */
    performSearch() {
      let searchURL = "https://www.google.com/search?q=" + this.searchQuery + " transmission gear ratio"
      window.open(searchURL, "_blank")
    },
    /** 
     * Calculation
     * 
     * [ (Axle Ratio x Vehicle Speed x Transmission Ratio x 336.13) / Tire Diameter ] for RPM
     * [ (RPM x Tire Diameter )/( Axle Ratio x Transmission Ratio x 336.13) ] for Vehicle Speed
    **/
    calculateRPMUsingCurrentData(){
      let axleRatio = this.getSelectedGearValue()
      let sum = (this.calculations.milesPerHour * axleRatio * this.userVehicle.transmissionFinalDrive * 336.13)
      this.calculations.revolutionsPerMinute = sum / this.userVehicle.tireDiameter
    },
    calculateMPHUsingCurrentData(){
      let axleRatio = this.getSelectedGearValue()
      let product = this.calculations.revolutionsPerMinute * this.userVehicle.tireDiameter
      let distProduct = axleRatio * this.userVehicle.transmissionFinalDrive * 336.13
      this.calculations.milesPerHour = product / distProduct
    },
    getSelectedGearValue(){
      switch(this.userVehicle.selectedGear) {
        case 1:
          return this.userVehicle.firstGearRatio
        case 2:
          return this.userVehicle.secondGearRatio
        case 3:
          return this.userVehicle.thirdGearRatio
        case 4:
          return this.userVehicle.fourthGearRatio
        case 5:
          return this.userVehicle.fifthGearRatio
        case 6:
          return this.userVehicle.sixthGearRatio
      }
    },
    // Default to calculating w/ speedo
    calculateFromExpansion(value) {
      if(this.validateAllFields(value)){
        this.userVehicle = value
        this.calculateRPMUsingCurrentData()
      } else {
        // Ignore!
      }
    },
    validateAllFields(value){
      if(value.tireDiameter != "" &&
      value.selectedGear != "" &&
      value.transmissionFinalDrive != ""){
        return true
      } else {
        console.log("Invalid... Ignoring this calculation!")
        return false
      }
    }
  },
  data: function() {
    return {
      // UI Data
      show: true,
      searchQuery: "",

      // Data input by the user
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

      // Calculated Data
      calculations: {
        milesPerHour: 0,
        revolutionsPerMinute: 0
      },

      // Tachometer Options
      tach: {
        min: 0,
        max: 8500,
        opts: {
          angle: -0.2, // The span of the gauge arc
          lineWidth: 0.2, // The line thickness
          radiusScale: 1, // Relative radius
          pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0.033, // The thickness
            color: "#000000" // Fill color
          },
          limitMax: true, // If false, max value increases automatically if value > maxValue
          limitMin: true, // If true, the min value of the gauge will be fixed
          colorStart: "#6FADCF", // Colors
          colorStop: "#8FC0DA", // just experiment with them
          strokeColor: "#E0E0E0", // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true // High resolution support
        }
      },

      // Speedometer Options
      speedo: {
        min: 0,
        max: 180,
        opts: {
          angle: -0.2, // The span of the gauge arc
          lineWidth: 0.2, // The line thickness
          radiusScale: 1, // Relative radius
          pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0.033, // The thickness
            color: "#000000" // Fill color
          },
          limitMax: true, // If false, max value increases automatically if value > maxValue
          limitMin: true, // If true, the min value of the gauge will be fixed
          colorStart: "#6FADCF", // Colors
          colorStop: "#8FC0DA", // just experiment with them
          strokeColor: "#E0E0E0", // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true // High resolution support
        }
      }
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
