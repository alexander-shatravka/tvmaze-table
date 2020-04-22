<template>
  <label class="show-search">
    <b>Search show:</b>
    <input
      class="search"
      type="text"
      placeholder="Type keyword for search"
      v-model="search"
    >
  </label>
</template>

<script>
import _ from 'lodash'
import NProgress from 'nprogress'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      NProgress.start()
      const route = {
        name: 'shows'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
      NProgress.done()
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
  .show-search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
</style>
