<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Communities</div>
        <v-list-item-title class="headline mb-1">Communities that celebrate the third pedal!</v-list-item-title>
        <v-list-item-subtitle>This site is meant to be a simple landing page with some cool at-a-glance resources around celebrating and using manual transmission vehicles.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="justify-center">
        <v-btn class="ma-2" tile outlined color="#FF4500" @click="openStickshift">
            <unicon name="reddit-alien-alt" fill="#FF4500"></unicon> reddit.com/r/stickshift
        </v-btn>
        <v-btn class="ma-2" tile outlined color="#FF4500" @click="openThreePedals">
            <unicon name="reddit-alien-alt" fill="#FF4500"></unicon> reddit.com/r/threepedals
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CommunityLinks",
  methods: {
      openStickshift: function(){
        let searchURL = "https://www.reddit.com/r/stickshift"
        window.open(searchURL, "_blank")
      },
      openThreePedals: function(){
        let searchURL = "https://www.reddit.com/r/threepedals"
        window.open(searchURL, "_blank")
      }
  }
};
</script>

