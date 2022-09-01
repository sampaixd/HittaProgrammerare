<script setup>

import FilterSkills from './filterSkills.vue';
</script>
<template>
    <div>
        <FilterSkills @skillChanged="skillChanged" @allSkillsRequiredSwitch="allSkillsRequredSwitch"/>
    </div>
</template>
<script>
export default {
    methods: {
        skillChanged(changedSkill) {
            this.$emit("skillChanged", changedSkill);
        },
        allSkillsRequredSwitch(){
            this.$emit("allSkillsRequiredSwitch");
        },
        priceChanged(changedPrice){
            this.$emit("priceChanged", changedPrice);
        }

    }
}
</script>
<style>
    
</style>