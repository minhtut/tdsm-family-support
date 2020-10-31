<template>
  <div class="black">
    <v-container>
      <v-item-group>
        <v-row no-gutters>
          <v-col
            class="ma-0 pa-2"
            v-for="(item, index) in items"
            :key="index"
            cols="12"
            md="6"
          >
            <v-card
              dark
              tile
              v-if="item.name != 'features-community'"
              :to="item.url"
            >
              <v-card-title
                class="orange black--text lighten-1 justify-center ma-0 pa-1"
                ><strong>{{ $t(item.name) }}</strong></v-card-title
              >
              <v-img :src="item.photo" height="450"></v-img>
            </v-card>

            <v-card dark tile v-if="item.name == 'features-community'">
              <v-card-title
                class="orange black--text lighten-1 justify-center ma-0 pa-1"
                ><strong>{{ $t(item.name) }}</strong></v-card-title
              >
              <v-carousel hide-delimiters cycle height="450">
                <v-carousel-item
                  v-for="(photo, i) in community_photos"
                  :key="i"
                  :src="photo.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Features",
  data: () => ({
    items: [
      {
        name: "features-programs",
        photo: require("../assets/logo2.png"),
        url: "/programs",
      },
      {
        name: "features-community",
        photo: require("../assets/logo1.png"),
        url: "/community",
      },
    ],
    community_photos: [
      {
        src: require("../assets/community/community1.png"),
      },
      {
        src: require("../assets/community/community2.png"),
      },
      {
        src: require("../assets/community/community3.png"),
      },
      {
        src: require("../assets/community/community4.png"),
      },
      {
        src: require("../assets/community/community5.png"),
      },
    ],
  }),
};
</script>
