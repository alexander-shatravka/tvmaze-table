<template>
  <div>
    <show-search-panel />
    <table class="tv-table">
      <tr>
        <th
          class="sortable"
          @click="sortTable('name', sortDirection)">
          Show name
        </th>
        <th>
          Language
        </th>
        <th>
          Genres
        </th>
        <th>
          Status
        </th>
        <th
          class="sortable"
          @click="sortTable('rating', sortDirection)">
          Rating
        </th>
      </tr>
      <tr v-for="show in shows"
          :key="show.id">
          <td>{{show.show.name}}</td>
          <td>{{show.show.language}}</td>
          <td>
            <span class="genres"
                 v-for="gengre in show.show.genres"
                 :key="gengre">
                 {{gengre}}
            </span>
          </td>
          <td>{{show.show.status}}</td>
          <td>{{show.show.rating.average}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import ShowsService from '@/services/ShowsService'
import ShowSearchPanel from './ShowSearchPanel.vue'

export default {
  components: {
    ShowSearchPanel
  },
  data () {
    return {
      shows: null,
      sort: '',
      sortDirection: 'asc'
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.shows = (await ShowsService.search(value)).data
      }
    }
  },
  methods: {
    sortTable (key, direction) {
      this.sort = key
      if (direction === 'asc') {
        this.shows.sort((a, b) => a.show[key] > b.show[key] ? 1 : -1)
        this.sortDirection = 'desc'
      } else {
        this.shows.sort((a, b) => a.show[key] < b.show[key] ? 1 : -1)
        this.sortDirection = 'asc'
      }
    }
  },
  async created () {
    this.shows = (await ShowsService.index()).data
  }
}
</script>

<style scoped>
  .tv-table {
    max-width: 1200px;
    width: 100%;
    margin: 50px auto;
  }
  .tv-table tr:nth-child(odd) {
    background-color: aliceblue;
  }
  .tv-table td,
  .tv-table th {
    padding: 8px 20px;
    text-align: left;
  }
  .sortable {
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .sortable:hover {
    background-color: #edf3f9;;
  }
  .sortable:before {
    content:'';
    display: block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid black;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-3px);
  }
  .sortable:after {
    content: '';
    display: block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid black;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(3px);
  }
</style>
