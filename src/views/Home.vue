<template>
  <div class="home">
    <v-container>
      <v-card
        elevation="2"
      >
        <v-card-title>{{ $t('facebook-page') }}</v-card-title>
        <v-card-subtitle>
          <a href="https://www.facebook.com/mn.tdsm" target="_blank">https://www.facebook.com/mn.tdsm</a>
        </v-card-subtitle>
      </v-card>
      <br>
      <v-card
        elevation="2"
      >
        <v-card-title>{{ $t('youtube-page') }}</v-card-title>
        <v-card-subtitle>
          <a href="https://www.youtube.com/channel/UCiMGn6sYtCaS1elfVe4W4Vw" target="_blank">https://www.youtube.com/channel/UCiMGn6sYtCaS1elfVe4W4Vw</a>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
