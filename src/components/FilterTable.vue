<script setup>
import { data } from '../store.js'
</script>
    
<template>
    <div>
        <div>
            <input type="checkbox" @click="allSkillsRequiredSwitch">
            <span>Alla utvalda skills krävs</span>
        </div>
        <div>
            <button v-if="!isSelectedEmpty" type="button" @click="toggleAllSkills">Unchecka alla skills</button>
            <button v-else type="button" @click="toggleAllSkills">Checka alla skills</button>
        </div>
        <span>System skills</span>
        <div v-for="skill in systemSkills">
            <input v-if="selectedSystemSkills.includes(skill)" type="checkbox" checked @click="filterSkill(skill)">
            <input v-else type="checkbox" unchecked @click="filterSkill(skill)">
            <span>{{ skill }}</span>
        </div>
        <span>Web skills</span>
        <div v-for="skill in webSkills">
            <input v-if="selectedWebSkills.includes(skill)" type="checkbox" checked @click="filterSkill(skill)">
            <input v-else type="checkbox" unchecked @click="filterSkill(skill)">
            <span>{{ skill }}</span>
        </div>
        <div>
            <span>minsta pris kr</span>
            <input type="number" v-model="minPrice" v-on:input="updateMinPrice">
            <span>högsta pris kr</span>
            <input type="number" v-model="maxPrice" v-on:input="updateMaxPrice">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            systemSkills: [
                "assembly",
                "c",
                "c++",
                "rust",
                "c#",
                "java",
                "python",
                "ruby"
            ],
            selectedSystemSkills: [
                "assembly",
                "c",
                "c++",
                "rust",
                "c#",
                "java",
                "python",
                "ruby"
            ],
            webSkills: [
                "javascript",
                "vue",
                "svelte",
                "react",
            ],
            selectedWebSkills: [
                "javascript",
                "vue",
                "svelte",
                "react",
            ],
            minPrice: 0,
            maxPrice: 100000000
        }
    },
    computed: {
        isSelectedEmpty() {
            console.log(this.selectedSystemSkills.length === 0 && this.selectedWebSkills.length === 0);
            return this.selectedSystemSkills.length === 0 && this.selectedWebSkills.length === 0;
        }
    },

    methods: {
        updateMinPrice() {
            console.log("yo 1");
            this.$emit("minPriceChange", this.minPrice)
        },


        updateMaxPrice() {
            console.log("yo 2");
            this.$emit("maxPriceChange", this.maxPrice);
        },


        toggleAllSkills() {
            if (this.selectedSystemSkills.length === 0 && this.selectedWebSkills.length === 0) {
                this.selectedSystemSkills = [...this.systemSkills];
                this.selectedWebSkills = [...this.webSkills];
            } else {
                this.selectedSystemSkills = [];
                this.selectedWebSkills = [];
            }
            console.log("swag mone");
            console.log(this.selectedSystemSkills);
            console.log(this.selectedWebSkills);
            this.$emit("toggleAllSkills");
        },

        filterSkill(selectedSkill) {
            this.changeSelectedSkills(selectedSkill);
            this.$emit("skillChanged", selectedSkill);
        },

        changeSelectedSkills(selectedSkill) {
            if (this.selectedSystemSkills.includes(selectedSkill)) {
                this.selectedSystemSkills.splice(this.selectedSystemSkills.indexOf(selectedSkill), 1);
            }
            else if (this.selectedWebSkills.includes(selectedSkill)) {
                this.selectedWebSkills.splice(this.selectedWebSkills.indexOf(selectedSkill), 1);
            }
            else if (this.systemSkills.includes(selectedSkill)) {
                this.selectedSystemSkills.push(selectedSkill);
            }
            else {
                this.selectedWebSkills.push(selectedSkill);
            }
        },

        allSkillsRequiredSwitch() {
            this.$emit("allSkillsRequiredSwitch");
        }
    }
}
</script>
<style scoped>
span {
    font-size: calc(9px + 1vw)
}

input {
    font-size: calc(9px + 1vw)
}

button{
    font-size: calc(9px + 1vw)
}
</style>
    