<script setup>
import { data } from './store.js';
</script>

<template>
    <div class="body">
        <div>
            <h1>Filter options</h1>
        </div>
        <div>
            <div v-for="prog in programmerare" class="programmerare">
                <span>namn: {{  prog.name  }}</span>
                <span> yrke: {{  prog.yrke  }}</span>
                <span> ort: {{  prog.ort  }}</span>
                <span> skills: <span v-for="skill in prog.skills"> {{  skill + ", "  }}</span></span>
                <span> om oss: {{ prog.aboutUs }}</span>
            </div>
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
            selectedSkills: ["assembly", "c", "c++", "rust", "c#", "java", "python", "javascript", "ruby"],
            price: 100000000,
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
                this.programmerare = data.getFilteredResults(this.yrke, this.ort, this.selectedSkills, this.price, false);
                console.log(this.programmerare);
            });
    },
    methods: {

    }

}
</script>
<style scoped>
.body {
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.programmerare {}
</style>