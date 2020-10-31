<template>
<div>
  <Features />
  <Events />
  </div>
</template>

<script>
import Features from '../components/Features'
import Events from '../components/Events'
export default {
  name: 'Home',
  components: {
    Features,
    Events
  },
  data: () => ({
  }),
}
</script>
