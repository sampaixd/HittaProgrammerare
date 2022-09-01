<script setup>
import { data } from './store.js';
import FilterTable from './components/FilterTable.vue';
</script>

<template>
    <div class="body">
        <div class="filterTable">
            <FilterTable @skillChanged="filterSkill" @priceChanged="filterPrice"
                @allSkillsRequiredSwitch="allSkillsRequiredSwitch" />
        </div>
        <div v-if="programmerare.length > 0">
            <div v-for="prog in programmerare" class="programmerare">
                <span>namn: {{ prog.name }}</span>
                <span> yrke: {{ prog.yrke }}</span>
                <span> ort: {{ prog.ort }}</span>
                <span> skills: <span v-for="skill in prog.skills"> {{ skill + ", " }}</span></span>
                <span>pris: {{ prog.price }} kr/mån</span>
                <span> om oss: {{ prog.aboutUs }}</span>
            </div>
        </div>
        <div v-else class="emptyList">
            <span>Ingenting matchade dina kriterier</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            yrke: "",
            ort: "",
            selectedSkills:
                ["assembly",
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
                    "react"],
            price: 100000000,
            isAllSkillsRequired: false,
            programmerare: []
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams) => {
                this.yrke = toParams.ort;   // for some reason they are swapped, might look into this later
                this.ort = toParams.yrke;
                console.log(toParams.yrke);
                this.updateList();
                console.log(this.programmerare);
            });
    },
    methods: {
        filterSkill(selectedSkill) {

            let selectedSkillIndex = this.selectedSkills.indexOf(selectedSkill);
            if (selectedSkillIndex === -1) {
                this.selectedSkills.push(selectedSkill);
            } else {
                this.selectedSkills.splice(selectedSkillIndex, 1);
            }
            this.updateList();
        },

        filterPrice(newPrice) {
            this.price = newPrice;
            this.updateList();
        },
        allSkillsRequiredSwitch() {
            console.log("yo 3")
            this.isAllSkillsRequired = !this.isAllSkillsRequired;
            this.updateList();
        },
        updateList() {
            console.log("yo 4");
            this.programmerare = data.getFilteredResults(this.yrke, this.ort, this.selectedSkills, this.price, this.isAllSkillsRequired);
            console.log("yo 5");
        }
    }

}
</script>
<style scoped>
.body {
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.filterTable{
    background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(46,45,253,1) 100%);
}
.programmerare {
    padding: 1.5rem;
    margin: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    border-style: solid;
    border-width: 5px;
    border-color: blue;
    border-radius: 10px;
    box-shadow: 5px 5px 20px 0px blue;
    font-size: 1.5vw;
}
.emptyList{
    font-size: 5.5vw;
    color: blue;
}

</style>