<template>
<div class="black">
<v-container>
  <v-item-group>
      <v-row no-gutters>
        <v-col
          class="ma-0 pa-1"
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          md="4"
        >
            <v-card
              dark
              tile
              v-if="item.name != 'features-community'"
              :to="item.url"
            >
              <v-card-title class="orange black--text lighten-1 justify-center ma-0 pa-1"><strong>{{ $t(item.name) }}</strong></v-card-title>
              <v-img :src="item.photo" height="400"></v-img>
            </v-card>

            <v-card
              dark
              tile
              v-if="item.name == 'features-community'"
            >
              <v-card-title class="orange black--text lighten-1 justify-center ma-0 pa-1"><strong>{{ $t(item.name) }}</strong></v-card-title>
              <v-carousel hide-delimiters cycle height="400">
                  <v-carousel-item
                    v-for="(photo,i) in community_photos"
                    :key="i"
                    :src="photo.src"
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
    name: 'Features',
    data: () => ({
    items: [
      { name: 'features-programs', photo: require('../assets/logo2.png'), url: '/programs'  },
      { name: 'features-resource', photo: require('../assets/logo3.png'), url: '/resource'  },
      { name: 'features-community', photo: require('../assets/logo1.png'), url: '/community' }
    ],
    community_photos: [
      {
        src: require('../assets/community1.png')
      },
      {
        src: require('../assets/community2.png')
      },
      {
        src: require('../assets/community3.png')
      },
      {
        src: require('../assets/community4.png')
      },
      {
        src: require('../assets/community5.png')
      }
    ]
  }),
  }
</script>
