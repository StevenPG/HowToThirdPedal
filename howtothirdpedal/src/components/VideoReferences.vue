<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Resources</v-list-item-title>
        <v-row>
            <v-col cols="6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/waeOibnmuJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-col>
        <v-col cols="6">
<iframe width="560" height="315" src="https://www.youtube.com/embed/dOSzCHmP1xM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wCu9W9xNwtI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </v-col>
        <v-col cols="6">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0Bqs-oHBBQk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>

export default {
  name: "VideoReferences",
  methods: {
      openStickshift: function(){
        let searchURL = "https://www.reddit.com/r/stickshift"
        window.open(searchURL, "_blank")
      }
  }
};
</script>

