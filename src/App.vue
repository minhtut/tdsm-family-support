<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      height="120"
    >
      <div class="d-flex align-center">
        <v-item-group>
          <v-select
            item-color="primary"
            v-model="$i18n.locale"
            :items="languages"
            label="en"
            solo
          ></v-select>
          <v-btn text><p>{{ $t('nav-programs') }}</p></v-btn>
          <v-btn text><p>{{ $t('nav-resource') }}</p></v-btn>
          <v-btn text><p>{{ $t('nav-contact') }}</p></v-btn>
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
    languages: [ 'en', 'my']
  }),
};
</script>
