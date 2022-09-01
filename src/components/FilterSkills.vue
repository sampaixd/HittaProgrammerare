<script setup>
import { data } from '../store.js'
</script>

<template>
    <div>
        <div>
            <input type="checkbox" @click="allSkillsRequiredSwitch">
            <span>Alla skills krävs</span>
        </div>
        <span>System skills</span>
        <div v-for="skill in systemSkills">
            <input type="checkbox" checked @click="filterSkill(skill)">
            <span>{{ skill }}</span>
        </div>
        <span>Web skills</span>
        <div v-for="skill in webSkills">
            <input type="checkbox" checked @click="filterSkill(skill)">
            <span>{{ skill }}</span>
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
            webSkills: [
                "javascript",
                "vue",
                "svelte",
                "react",
            ]
        }
    },
    methods: {
        filterSkill(selectedSkill) {
            this.$emit("skillChanged", selectedSkill);
        },
        allSkillsRequiredSwitch() {
            this.$emit("allSkillsRequiredSwitch");
        }
    }
}
</script>
<style scoped>
span {
}
input {
}
</style>