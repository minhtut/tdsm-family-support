<template>
  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary text-center white--text"
        cols="12"
      >
        <strong>{{ new Date().getFullYear() }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'Appfooter',

    data: () => ({
    }),
  }
</script>
