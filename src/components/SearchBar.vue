<script setup>
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import router from '../router';
</script>

<template>
    <div>
        <form class="searchForm" @submit.prevent="search">
            <span>Yrke</span>
            <span>Ort</span>
            <button type="button" @click="logOut" v-if="loggedIn">Logga ut</button>
            <button type="button" @click="directToLogin" v-else>Logga in</button>
            <input v-model="yrke" placeholder="alla yrken">
            <input v-model="ort" placeholder="alla orter">
            <button type="submit" @click="search">Hitta programmerare</button>
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            yrke: "",
            allYrke: ["webbutvecklare", "systemutvecklare", "databasansvarig"],
            selectedYrke: ["webbutvecklare", "systemutvecklare", "databasansvarig"],
            ort: "",
            allOrt: ["stockholm", "borås", "solna"],
            selectedOrt: ["stockholm", "borås", "solna"],
            loggedIn: false
        }
    },

    mounted() { // TODO fix way to change login button to logout and vice versa
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                console.log("logged in");
                this.loggedIn = true;
            }
            else {
                console.log("logged out");
                this.loggedIn = false;
            }
        });
    },

    methods: {
        search() {
            let yrkeData = this.yrke;
            let ortData = this.ort;
            if (this.yrke === "") {
                yrkeData = "all";
            }
            if (this.ort === "") {
                ortData = "all";
            }

            this.$emit("search", yrkeData, ortData);

        },
        directToLogin() {
            console.log("wee");
            this.$emit("login");
        },
        logOut() {
            signOut(getAuth()).then(() => {
                router.push('/');
            })
        }
    }
}
</script>
<style scoped>
.searchForm {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
}

span {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: calc(9px + 1vw)
}

input {
    display: flex;
    justify-content: center;
    font-size: calc(9px + 1vw)
}

button {
    font-size: calc(9px + 1vw)
}
</style>