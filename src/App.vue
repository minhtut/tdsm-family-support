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
            color="primary"
            v-model="$i18n.locale"
            :items="languages"
            label="en"
            solo
          ></v-select>
          <router-link to="/">
            <v-btn text>{{ $t('nav-home') }}</v-btn>
          </router-link>
          <router-link to="/programs">
            <v-btn text>{{ $t('nav-programs') }}</v-btn>
          </router-link>
          <router-link to="/resource">
            <v-btn text>{{ $t('nav-resource') }}</v-btn>
          </router-link>
          <router-link to="/contact">
            <v-btn text>{{ $t('nav-contact') }}</v-btn>
          </router-link>
        </v-item-group>
      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    languages: [ 'en', 'my']
  }),
};
</script>
