<template>
  <div >
    <v-app-bar
      color="primary"
      height="100"
      dark
    >

      <v-btn dark @click.stop="drawer = !drawer" text class="hidden-sm-and-up" >
        <v-icon x-large>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
			<v-btn class="hidden-xs-only" text to="/"><strong>{{ $t('home') }}</strong></v-btn>
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
    <v-navigation-drawer v-model="drawer" absolute temporary left>
      <v-list
        nav
        dense
      >
         <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.route"
            link
            >
            <v-list-item-content>
            <strong>{{ $t(item.name) }}</strong>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: 'Appbar',
    data: () => ({
      languages: [ 'EN', 'MY'],
      drawer: false,
      items: [
        { name: 'home', route: '/' },
        { name: 'features-programs', route: '/programs' },
        { name: 'features-resource', route: '/resource' },
        { name: 'features-community', route: '/community' }
      ],
    }),
  }
</script>

