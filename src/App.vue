<template>
  <div id="app">
    <p style="white-space: pre-wrap">
      <b>TODO:</b> TASK/ff-frontend-test.docx
      * [x] search form
      * [x] history
      * [x] results
        * [x] as tabs
        * [x] as tables
      * [x] filter
      * [x] sort by name
      * [x] sort by stars
      * [ ] modal for preview repo and author info
    </p>
    <SearchForm @search="handleSearch" />
    <br>
    <SearchHistory :items="history" />
    <br>
    <SearchResults :items="history" />
  </div>
</template>

<script>
import searchRepositories from '@/services/api.github/searchRepositories';
import SearchForm from '@/components/SearchForm.vue';
import SearchHistory from '@/components/SearchHistory.vue';
import SearchResults from '@/components/SearchResults.vue';

export default {
  name: 'App',

  components: {
    SearchForm,
    SearchHistory,
    SearchResults,
  },

  data() {
    return {
      history: [],
    };
  },

  methods: {
    async handleSearch(payload) {
      const response = await searchRepositories(payload.query);
      this.history.push({ ...payload, response });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}
</style>
