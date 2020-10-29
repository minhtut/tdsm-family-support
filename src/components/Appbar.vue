<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-menu
      top
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="hidden-sm-and-up"
          dark
          v-bind="attrs"
          v-on="on"
          text
        >
          <v-icon x-large>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.route"
        >
          <v-list-item-title>{{ $t(item.name) }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-item-group class="hidden-xs-only">
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

    <v-spacer></v-spacer>

    <div style="width: 100px;margin: auto">
      <v-select
        background-color="primary"
        color="primary"
        v-model="$i18n.locale"
        :items="languages"
        label="en"
        solo
        flat
      ></v-select>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Appbar',

    data: () => ({
      languages: [ 'en', 'my'],
      items: [
        { name: 'nav-home', route: '/' },
        { name: 'nav-programs', route: '/programs' },
        { name: 'nav-resource', route: '/resource' },
        { name: 'nav-contact', route: '/contact' }
      ],
    }),
  }
</script>
