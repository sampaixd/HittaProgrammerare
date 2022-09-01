<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import SearchBar from './components/SearchBar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader @search="Search" />
  <RouterView />
  <TheFooter/>
</template>

<script>
export default {
  methods: {
    Search(yrke, ort) {
      this.$router.replace(`/search-results/${ort}/${yrke}`);
    }

  }
}
</script>

<style scoped>
</style>
