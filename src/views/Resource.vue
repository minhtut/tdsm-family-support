<template>
  <div class="resource">
    <v-container>
      <a
        v-if="$i18n.locale == 'EN'"
        style="text-decoration: none"
        href="https://www.health.state.mn.us/diseases/coronavirus/"
        target="_blank"
        >{{ $t("mndoh-covid19") }}</a
      >
      <a
        v-else
        style="text-decoration: none"
        href="https://translate.google.com/translate?hl=en&sl=en&tl=my&u=https%3A%2F%2Fwww.health.state.mn.us%2Fdiseases%2Fcoronavirus%2F"
        target="_blank"
        >{{ $t("mndoh-covid19") }}</a
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Resource",
  data: () => ({
  }),
};
</script>
