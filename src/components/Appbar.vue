<template>
  <div>
    <v-app-bar
      color="primary"
      height="100"
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
      <v-spacer></v-spacer>
      <v-container style="width:110px">
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
        { name: 'home', route: '/' },
        { name: 'features-programs', route: '/programs' },
        { name: 'features-resource', route: '/resource' },
        { name: 'features-community', route: '/community' }
      ],
    }),
  }
</script>

