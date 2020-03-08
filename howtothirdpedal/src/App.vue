<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="blue" dark>
        <v-toolbar-title>HowToThirdPedal</v-toolbar-title>
      </v-app-bar>
      <v-content>
        <v-container>
          <v-row align="start" justify="center">
            <v-col cols="12">
              <CommunityLinks/>
              <Gauges />
            </v-col>
          </v-row>
        </v-container>
      </v-content>
      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Gauges from "./components/Gauges.vue";
import CommunityLinks from "./components/CommunityLinks.vue"

export default {
  name: "App",
  components: {
    Gauges,
    CommunityLinks
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
