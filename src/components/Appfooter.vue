<template>
  <div>
    <v-footer dark padless>
      <v-card class="flex primary" flat tile>
        <v-card-title class="black justify-center">
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
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
        <v-container>
        <v-card-text class="primary py-2 white--text text-center">
          <strong>Sitagu Dhamma Vihara</strong><br />
          <strong>32500 Lofton Ave.</strong><br />
          <strong>Chisago City, MN 55013</strong><br /><br />
          THE SITAGU THERAVADA DHAMMA SOCIETY OF MINNESOTA IS A REGISTERED
          501(C)(3) NON-PROFIT CORPORATION. REGISTRATION DOES NOT IMPLY
          ENDORSEMENT, APPROVAL, OR RECOMMENDATION BY THE STATE.<br />
          <br />
          <strong
            >&#169; TDSM Web Team {{ new Date().getFullYear() }} - Family Support</strong
          >
        </v-card-text>
        </v-container>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Appfooter",

  data: () => ({
    icons: [
      {
        name: "mdi-facebook",
        url: "https://www.facebook.com/mn.tdsm",
        target: "_blank",
      },
      {
        name: "mdi-youtube",
        url: "https://www.youtube.com/channel/UCiMGn6sYtCaS1elfVe4W4Vw",
        target: "_blank",
      },
    ],
  }),
};
</script>

