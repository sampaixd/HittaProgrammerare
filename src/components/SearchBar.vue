<script setup>
    import {useRouter} from 'vue-router';
    import {getAuth} from '@firebase/auth';
</script>

<template>
    <div>
        <form class="searchForm" @submit.prevent="search">
            <span>Yrke</span>
            <span>Ort</span>
            <button type="button" @click="logOut" v-if="loggedIn">Logga ut</button>
            <button type="button" @click="directToLogin" v-else>Logga in</button>
            <input v-model="yrke">
            <input v-model="ort">
            <button type="submit" @click="search">Hitta programmerare</button>
        </form>
    </div>
</template>
<script>
import { onAuthStateChanged, signOut } from '@firebase/auth';
import router from '../router';

export default {
    data() {
        return {
            yrke: "",
            allYrke: ["webbutvecklare", "systemutvecklare", "databasansvarig"],
            selectedYrke: ["webbutvecklare", "systemutvecklare", "databasansvarig"],
            ort: "",
            allOrt: ["stockholm", "borås", "solna"],
            selectedOrt: ["stockholm", "borås", "solna"],
        }
    },

    computed: { // TODO fix way to change login button to logout and vice versa
        loggedIn() {
            let auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) { return true; }
                else { return false }
            })
            return
        }
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
    font-size: 1.5vw;
}

input {
    display: flex;
    justify-content: center;
    font-size: 1.5vw;
}

button {
    font-size: 1.5vw;
}
</style>