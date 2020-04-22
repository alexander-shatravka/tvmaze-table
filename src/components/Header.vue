<template>
  <header>
    <router-link
      tag="a"
      class="btn-home"
      :to="{
            name: 'shows'
          }">
      TVmaze shows
    </router-link>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
  header {
    width: 100%;
    max-width: 1200px;
    height: 60px;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .btn-home {
    float: left;
    clear: both;
    font-weight: bold;
    color: #000;
  }
</style>
