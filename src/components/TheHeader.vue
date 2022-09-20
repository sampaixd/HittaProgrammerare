<script setup>
import SearchBar from './SearchBar.vue';
</script>


<template>
    <header>
        <div class="logo">
            <img alt="Hitta Programmerare logo" class="logo" src="@/assets/SiggeDrip.jpeg" @click="returnToHome"
            @mouseenter="hover = true"
            @mouseleave="hover = false"/>
            <h1 v-if="hover">Klicka för att gå tillbaka till huvudmenyn</h1>
            <h1 v-else >Hitta programmerare</h1>
            <SearchBar @search="Search" @login="login" />
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            hover: false
        }
    },
    methods: {
        Search(ort, yrke) {
            this.$emit("search", yrke, ort);
        },
        login() {
            this.$emit("login");
        },
        returnToHome() {
            this.$emit("home");
        }
    }
}
</script>
<style scoped>
header {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: darkgray;
}

.logo {
    display: grid;
    grid-template-columns: 1fr 2fr 4fr;
    align-items: center;
}

h1 {
    font-size: calc(11px + 1vw)}

a {
    text-decoration: none;
    color: black;
    transition: 1s;
}

a:hover {
    text-decoration: dashed;
    color: lime;
    transition: 1s;
}

img {
    width: 15vw;
    height: 15vw;
}

.headerLinks {
    font-size: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}
</style>