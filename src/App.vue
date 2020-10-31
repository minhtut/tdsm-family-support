<template>
  <v-app>
    <Appbar />
    <v-main>
      <router-view />
    </v-main>
    <Appfooter />
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import Appfooter from "./components/Appfooter";
export default {
  name: "App",
  components: {
    Appbar,
    Appfooter,
  },
};
</script>
