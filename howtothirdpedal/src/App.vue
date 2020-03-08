<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="blue" dark>
        <v-toolbar-title>HowToThirdPedal</v-toolbar-title>
      </v-app-bar>
      <v-content>
        <Gauges />
      </v-content>
      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Gauges from "./components/Gauges.vue";

export default {
  name: "App",
  components: {
    Gauges
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
