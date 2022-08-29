<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <header>
    <TheHeader/>
  </header>
  <div>
    <SearchBar @search="Search"/>
  </div>
</template>

<script>
export default {
  methods: {
    Search(yrke, ort) {
      // TODO fixa ett smart sätt att transistiona från yrke x och ort Y
      // till att ha en meny på filterade resultat, bestäm vilken data
      // som ska skickas till filterade menyn, vart filtreringen sker
      // samt hur allting tas till SearchResults.vue
    }

  } 
  }
</script>

<style scoped>
</style>
