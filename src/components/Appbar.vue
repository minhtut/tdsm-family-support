<template>
  <div>
    <v-app-bar
      color="primary"
      height="110"
      dark
    >
      <v-menu
        top
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on" text class="hidden-sm-and-up" >
            <v-icon x-large>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.route" >
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

      <v-container fluid style="width:110px">
        <v-select
          style="height:40px"
          background-color="primary"
          :items="languages"
          v-model="$i18n.locale"
          label="EN"
          dense
          solo
          flat
        >
        </v-select>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'Appbar',

    data: () => ({
      languages: [ 'EN', 'MY'],
      items: [
        { name: 'nav-home', route: '/' },
        { name: 'nav-programs', route: '/programs' },
        { name: 'nav-resource', route: '/resource' },
        { name: 'nav-contact', route: '/contact' }
      ],
    }),
  }
</script>

