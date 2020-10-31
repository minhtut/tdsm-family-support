<template>
<div class="black">
<v-container>
  <v-item-group>
      <v-row>
        <v-col
          class="ma-0 pa-2"
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          md="4"
        >
            <v-card
              dark
              tile
              :to="item.url"
            >
              <v-card-title class="orange black--text lighten-1 justify-center"><strong>{{ $t(item.name) }}</strong></v-card-title>
              <v-img :src="item.photo" height="400"></v-img>
              
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
    ]
  }),
  }
</script>
