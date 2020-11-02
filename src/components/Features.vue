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
            <v-card dark tile>
              <v-card-title
                class="orange black--text lighten-1 justify-center ma-0 pa-1"
                ><strong>{{ $t(item.name) }}</strong></v-card-title
              >
              <v-carousel hide-delimiters cycle height="450" :interval="item.interval">
                <v-carousel-item
                  v-for="(photo, i) in item.photos"
                  :key="i"
                  :src="photo.src"
                  reverse-transition="scale-transition"
                  transition="slide-y-reverse-transition"
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
        photo: require("../assets/logo1.png"),
        url: "/programs",
        interval: 10000,
        photos: [
          { src: require("../assets/programs/programs1.png") },
          { src: require("../assets/programs/programs2.png") }
        ],
      },
      {
        name: "features-community",
        photo: require("../assets/logo1.png"),
        url: "/community",
        interval: 5000,
        photos: [
          { src: require("../assets/community/community1.png") },
          { src: require("../assets/community/community2.png") }
        ],
      },
    ],
  }),
};
</script>
