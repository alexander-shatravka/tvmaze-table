<template>
  <div>
    <h1>Tvmaze</h1>
  </div>
</template>

<script>
import ShowsService from '@/services/ShowsService'

export default {
  data () {
    return {
      shows: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.shows = (await ShowsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>

</style>
