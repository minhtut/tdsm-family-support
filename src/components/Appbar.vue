<template>
  <div >
    <v-app-bar
      class="ma-0 pa-0"
      color="primary"
      dark
    >

      <v-btn dark @click.stop="drawer = !drawer" text class="hidden-sm-and-up" >
        <v-icon x-large>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-item-group class="hidden-xs-only pa-0 ma-0">
        <v-btn class="pa-0 ma-2" to="/" text>{{ $t('home') }}</v-btn>
        <v-btn class="pa-0 ma-2" to="/programs" text>{{ $t('features-programs') }}</v-btn>
        <v-btn class="pa-0 ma-2" to="/resource" text>{{ $t('features-resource') }}</v-btn>
        <v-btn class="pa-0 ma-2" to="/community" text>{{ $t('features-community') }}</v-btn>
    </v-item-group>   
    <v-btn class="pa-0 ma-2" text>
            <v-select
              style="height:40px;width:100px"
              background-color="primary"
              :items="languages"
              v-model="$i18n.locale"
              label="EN"
              dense
              solo
              flat
              outlined
            >
            </v-select>
        </v-btn>     
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

