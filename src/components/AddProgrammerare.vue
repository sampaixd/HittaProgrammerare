<script setup>
import { data } from '../store.js'
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
</script>

<template>
    <div>
        <div v-if="isLoggedIn && !addingProgrammerare" class="addProgrammerare">
            <button type="button" @click="beginAddingProgrammerare">Lägg till programmerare</button>
        </div>
        <div v-else-if="addingProgrammerare" class="programmerare">
            <button @click="ResetAllInputs">Avbryt och släng bort programmerare</button>
            <div class="programmerarecolumn">
                <div class="inputAndErrorMessage">
                    <input type="text" placeholder="namn" v-model="addingName">
                    <span class="errorMessage">{{nameErr}}</span>
                </div>
                <div class="inputAndErrorMessage">
                    <input type="text" placeholder="yrke" v-model="addingYrke">
                    <span class="errorMessage">{{yrkeErr}}</span>
                </div>
                <div class="inputAndErrorMessage">
                    <input type="text" placeholder="ort" v-model="addingOrt">
                    <span class="errorMessage">{{ortErr}}</span>
                </div>
            </div>
            <div class="programmerarecolumn">
                <div class="inputAndErrorMessage">
                    <input type="text" placeholder="skills (separera flera skills med mellanslag)"
                        v-model="addingSkills">
                    <span class="errorMessage">{{skillsErr}}</span>
                </div>
                <div class="inputAndErrorMessage">
                    <input type="number" placeholder="pris (kr/mån)" v-model="addingPrice">
                    <span class="errorMessage">{{priceErr}}</span>
                </div>
                <div class="inputAndErrorMessage">
                    <input type="textarea" placeholder="beskriv vad ni gör och står för" v-model="addingAboutUs">
                    <span class="errorMessage">{{aboutUsErr}}</span>
                </div>
            </div>
            <button @click="addProgrammerare">Lägg till programmerare</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            uEmail: "",
            addingProgrammerare: false,
            addingName: "",
            addingYrke: "",
            addingOrt: "",
            addingSkills: "",
            addingPrice: "",
            addingAboutUs: "",
            nameErr: "",
            yrkeErr: "",
            ortErr: "",
            skillsErr: "",
            priceErr: "",
            aboutUsErr: "",
            smallInputMaxLen: 20,   // name, ort, yrke
            bigInputMaxLen: 200,    //skills, aboutUs
            existingSkills: [
                "assembly",
                "c",
                "c++",
                "rust",
                "c#",
                "java",
                "python",
                "ruby",
                "javascript",
                "vue",
                "svelte",
                "react"]

        }
    },
    mounted() {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                console.log("logged in");
                this.isLoggedIn = true;
                this.uEmail = user.email;
                console.log(this.uEmail);
            }
            else {
                console.log("logged out");
                this.isLoggedIn = false;
            }
        });
    },
    methods: {
        beginAddingProgrammerare() {
            this.addingProgrammerare = true;
        },
        ResetAllInputs() {
            this.addingName = "";
            this.addingYrke = "";
            this.addingOrt = "";
            this.addingSkills = "";
            this.addingPrice = "";
            this.addingAboutUs = "";
            this.addingProgrammerare = false;
            this.nameErr = "";
            this.yrkeErr = "wee";
            this.ortErr = "";
            this.skillsErr = "";
            this.priceErr = "";
            this.aboutUsErr = "";

        },

        addProgrammerare() {
            if (this.inputIsValid()) {
                let skills = this.addingSkills.split(' ');
                data.addProgrammerare(this.addingName,
                    this.addingYrke,
                    this.addingOrt,
                    skills,
                    parseInt(this.addingPrice),
                    this.addingAboutUs,
                    this.uEmail);
                this.ResetAllInputs();
            }

        },

        inputIsValid() {
            this.nameErr = this.sanitizeStr(this.addingName, this.smallInputMaxLen);
            this.yrkeErr = this.sanitizeStr(this.addingYrke, this.smallInputMaxLen);
            this.ortErr = this.sanitizeStr(this.addingOrt, this.smallInputMaxLen);
            this.skillsErr = this.sanitizeStr(this.addingSkills, this.bigInputMaxLen);
            this.priceErr = this.sanitizeInt(this.addingPrice);
            this.aboutUsErr = this.sanitizeStr(this.addingAboutUs, this.bigInputMaxLen);

            if (this.skillsErr === "") {
                let skills = this.addingSkills.split(' ');
                this.skillsErr = this.sanitizeSkillsList(skills);
            }



            if (this.nameErr === "" &&
                this.yrkeErr === "" &&
                this.ortErr === "" &&
                this.skillsErr === "" &&
                this.aboutUsErr === "") {
                return true;
            } else {
                return false;
            }
        },

        // very simple since i dont really know what symbols to look out for
        sanitizeStr(item, maxLen) {

            if (item.includes('<') ||
                item.includes('>') ||
                item.includes(';') ||
                item.includes('-')) {
                return "ogiltiga tecken i inputen";
            } else if (item.length > maxLen) {
                return "inputen är för lång"
            } else if (item.length === 0) {
                return "saknar input"
            } else {
                return "";
            }
        },

        sanitizeInt(item) {
            if (item.length === 0) {
                return "ogiltig input";
            } else {
                return "";
            }
        },

        sanitizeSkillsList(skills) {
            let errorStr = "";
            skills.forEach((skill) => {
                if (!this.existingSkills.includes(skill)) {
                    if (errorStr === "") {
                        errorStr = "kunde inte hitta skill(s): ";
                    }
                    errorStr += " " + skill;
                }
            });
            return errorStr;
        }


    }
}
</script>
<style scoped>
.programmerare {
    padding: 1.5rem;
    margin: 1.5rem;
    row-gap: 2vw;
    display: grid;
    grid-template-rows: 1fr 2fr;
    border-style: solid;
    border-width: 5px;
    border-color: blue;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px blue;
    font-size: 1.5vw;
}

.addProgrammerare {
    padding: 1.5rem;
    margin: 1.5rem;
    row-gap: 2vw;
    display: grid;
    border-style: solid;
    border-width: 5px;
    border-color: blue;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px blue;
    font-size: 1.5vw;
}

.programmerarecolumn {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.inputAndErrorMessage {
    display: flex;
    flex-direction: column;
}

.errorMessage {
    color: red;
    font-size: calc(5px + 1vw);

}

span {
    font-size: calc(10px + 1vw);
}

button {
    font-size: calc(10px + 1vw);
}
</style>