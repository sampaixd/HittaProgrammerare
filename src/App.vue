<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import SearchBar from './components/SearchBar.vue'
import TheFooter from './components/TheFooter.vue'
import { data } from './store.js'
import { toDisplayString } from 'vue'
</script>

<template>
  <TheHeader @search="Search" @login="login" @home="returnToHome"/>
  <RouterView />
  <TheFooter class="footer" />
</template>

<script>
export default {
  methods: {
    Search(yrke, ort) {
      this.$router.replace(`/search-results/${ort}/${yrke}`);
    },
    login() {
      console.log("woo");
      this.$router.replace('/login');
    },

    returnToHome() {
      this.$router.replace('/');
    }

  },
  /*created() {
    if (!data.programmerareIsLoaded) {
      console.log("loading programmerare");
      data.loadProgrammerare().then(() => {
        console.log("programmerare loaded");
      });
    } else {
      console.log("programmerare is already loaded");
    }
  }*/
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: flex-end;
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>
