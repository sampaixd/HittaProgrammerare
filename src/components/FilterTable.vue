<script setup>
    import { data } from '../store.js'
    </script>
    
    <template>
        <div>
            <div>
                <input type="checkbox" @click="allSkillsRequiredSwitch">
                <span>Alla utvalda skills krävs</span>
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
            <div>
                <span>minsta pris kr</span>
                <input type="text" v-model="minPrice" v-on:input="updateMinPrice">
                <span>högsta pris kr</span>
                <input type="text" v-model="maxPrice" v-on:input="updateMaxPrice">
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
                ],
                minPrice: 0,
                maxPrice: 100000000
            }
        },
        methods: {
            updateMinPrice() {
                this.sanitizeMinPrice();
                console.log("yo 1");
                this.$emit("minPriceChange", this.minPrice)
            },
    
            sanitizeMinPrice() {
                if (isNaN(this.minPrice[this.minPrice.length - 1])) {
                    this.minPrice = this.minPrice.slice(0, -1);
                }
            },
    
            updateMaxPrice() {
                this.sanitizeMaxPrice();
                console.log("yo 2");
                this.$emit("maxPriceChange", this.maxPrice);
            },
    
            sanitizeMaxPrice() {
                console.log(this.maxPrice[this.maxPrice.length - 1]);
                if (isNaN(this.maxPrice[this.maxPrice.length - 1])) {
                    this.maxPrice = this.maxPrice.slice(0, -1);
                }
            },
    
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
    span {}
    
    input {}
    </style>
    