<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal justify-center">
       
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-8"
          dark
          icon
          :href="icon.url"
          :target="icon.target"
        >
          <v-icon size="36px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="primary py-2 white--text text-center">
        <strong>&#169; {{ new Date().getFullYear() }} - TDSM Family Support</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Appfooter',

    data: () => ({
      icons: [
        { name: 'mdi-facebook', url: 'https://www.facebook.com/mn.tdsm', target: '_blank' },
        { name: 'mdi-youtube', url: 'https://www.youtube.com/channel/UCiMGn6sYtCaS1elfVe4W4Vw', target: '_blank' }
      ],
    }),
  }
</script>
