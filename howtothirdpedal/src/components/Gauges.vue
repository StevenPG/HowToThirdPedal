<template>
<v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div class="overline mb-4" dark v-on="on">What is this?</div>
          </template>
          <span>Expand the option at the bottom to enter your vehicle information. <br/> See what speed you'll go at what RPM in each gear!</span>
        </v-tooltip>
        <v-row>
          <v-col cols="6">
         <v-gauge :minValue="tach.min" :maxValue="tach.max" :options="tach.opts" :value="1000" />
         <br/>
         <p>Tachometer</p>
         </v-col>
         <v-col cols="6">
         <v-gauge :minValue="speedo.min" :maxValue="speedo.max" :options="speedo.opts" :value="1000" />
         <br/>
         <p>Speedometer</p>
         </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="blue"
        text
        @click="show = !show"
      >
        Enter Transmission Data
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import VGauge from 'vgauge'

export default {
  components: {
    VGauge
  },
  name: 'Gauges',
  props: {
    msg: String
  },
  data: function() {
    return {
      // UI Data
      show: false,

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
            color: '#000000' // Fill color
          },
          limitMax: false,     // If false, max value increases automatically if value > maxValue
          limitMin: false,     // If true, the min value of the gauge will be fixed
          colorStart: '#6FADCF',   // Colors
          colorStop: '#8FC0DA',    // just experiment with them
          strokeColor: '#E0E0E0',  // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true,     // High resolution support
        }
      },

      // Speedometer Options
      speedo: {
        min: 0,
        max: 8500,
        opts: {
          angle: -0.2, // The span of the gauge arc
          lineWidth: 0.2, // The line thickness
          radiusScale: 1, // Relative radius
          pointer: {
            length: 0.5, // // Relative to gauge radius
            strokeWidth: 0.033, // The thickness
            color: '#000000' // Fill color
          },
          limitMax: false,     // If false, max value increases automatically if value > maxValue
          limitMin: false,     // If true, the min value of the gauge will be fixed
          colorStart: '#6FADCF',   // Colors
          colorStop: '#8FC0DA',    // just experiment with them
          strokeColor: '#E0E0E0',  // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true,     // High resolution support
        }
      }
    }
  }
}
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
