<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      height="120"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          src="@/assets/tdsm.png"
        />
        <v-item-group>
          <v-btn text>Programs</v-btn>
          <v-btn text>Resource</v-btn>
          <v-btn text>Contact</v-btn>
        </v-item-group>
      </div>

    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    languages: [ 'Burmese', 'English']
  }),
};
</script>
