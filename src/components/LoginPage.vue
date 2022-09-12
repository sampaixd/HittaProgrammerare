<script setup>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import {useRouter} from 'vue-router';
import router from '../router';
</script>
<template>
    <div>
        <h1 v-if="isNewUser">Skapa nytt konto</h1>
        <h1 v-else>Logga in</h1>
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Lösenord">
        <span v-if="errorMsg"> {{errorMsg}} </span>
        <button type="button" @click="createUser" v-if="isNewUser">Skapa konto</button>
        <button type="button" @click="login" v-else>Logga in</button>
        <button type="button" @click="toggleIsNewUser" v-if="isNewUser">Har du redan ett konto? Logga in här</button>
        <button type="button" @click="toggleIsNewUser" v-else>Har du inget konto? Skapa konto här</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            errorMsg: "",
            isNewUser: false
        }
    },
    methods: {

        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then(user => {
                    const client = user.user;
                    console.log("Hello ", client.email);
                    router.push('/');

                })
                .catch(error => {
                    switch (error.code) {
                        case "auth/invalid-email":
                            this.errorMsg = "ogiltig mail";
                            break;
                        case "auth/user-not-found":
                            this.errorMsg = "mailen är inte registrerad till ett konto";
                            break;
                        case "auth/wrong-password":
                            this.errorMsg = "fel lösenord";
                            break;
                        default:
                            this.errorMsg = "mailen eller lösenordet är fel";
                            break;
                    }
                })
        },
        createUser() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password);
        },

        toggleIsNewUser() {
            this.isNewUser = !this.isNewUser;
        }
    }
}
</script>
<style scoped>
div {
    padding: 1.5rem;
    margin: 1.5rem;
    row-gap: 1vw;
    display: grid;
    border-style: solid;
    border-width: 5px;
    border-color: blue;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px blue;
    font-size: 1.5vw;
}

h1 {
    display: flex;
    justify-content: center;
}

span {
    display: flex;
    justify-content: center;
    font-size: calc(5px + 2vw);
}
</style>