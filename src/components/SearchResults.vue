<script setup>
import { data } from '../store.js';
import FilterTable from './FilterTable.vue';
</script>

<template>
    <div class="body">
        <div class="filterTable">
            <span>Sortera efter</span>
            <select v-model="sort" @change="updateSort">
                <option value="reviews-false">Recensioner högt-lågt</option>
                <option value="reviews-true">Recensioner lågt-högt</option>
                <option value="price-false">Pris högt-lågt</option>
                <option value="price-true">Pris lågt-högt</option>
            </select>
            <FilterTable @skillChanged="filterSkill" @minPriceChange="changeMinPrice" @maxPriceChange="changeMaxPrice"
                @allSkillsRequiredSwitch="allSkillsRequiredSwitch" @toggleAllSkills="toggleAllSkills" />
        </div>
        <div v-if="programmerare.length > 0">
            <div v-for="prog in programmerare" class="programmerare">
                <div class="programmerarecolumn">
                    <span>namn: {{ prog.name }}</span>
                    <span> yrke: {{ prog.yrke }}</span>
                    <span> ort: {{ prog.ort }}</span>
                </div>
                <div class="programmerarecolumn">
                    <span> skills: <span v-for="skill in prog.skills"> {{ skill + ", " }}</span></span>
                    <span>pris: {{ prog.price }} kr/mån</span>
                    <span> om oss: {{ prog.aboutUs }}</span>
                </div>

                <div class="programmerarecolumn">
                    <span>genomsnittlig recensionspoäng: {{ avgRating(prog.reviews) }}</span>
                    <button v-if="prog.reviews.length > 0 && showReviewsProg !== prog" @click="showReviews(prog)">Visa
                        recensioner</button>
                    <button v-else-if="showReviewsProg === prog" @click="hideReviews">Dölj recensioner</button>
                    <span v-else></span>
                    <button v-if="prog !== currentReviewProg" type="button" @click="beginReview(prog)">lämna en
                        recension</button>
                    <button v-else type="button" @click="cancelReview">avbryt recension</button>
                </div>
                <div v-if="prog === showReviewsProg">
                    <div v-for="review in prog.reviews" class="programmerarecolumn">
                        <span>poäng: {{ review.rating }}</span>
                        <span v-if="review.reviewText !== ''">beskrivning: {{ review.reviewText }}</span>
                        <span v-else>beskrivning saknas</span>
                        <span></span>
                    </div>
                </div>
                <div v-if="prog === currentReviewProg" class="programmerarecolumn">
                    <div>
                        <span>poäng</span>
                        <select v-model="rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <input type="text" v-model="reviewText" placeholder="beskrivning (frivilligt)">
                    <button type="button" @click="addReview(prog, rating, reviewText)">lägg till recension</button>
                </div>
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
            yrke: this.$route.params.ort === "all" ? "" : this.$route.params.ort,
            ort: this.$route.params.yrke === "all" ? "" : this.$route.params.yrke,
            sort: "",
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
            minPrice: 0,
            maxPrice: 100000000,
            isAllSkillsRequired: false,
            programmerare: [],
            currentReviewProg: "",
            showReviewsProg: "",
            rating: 5,
            reviewText: ""
        }
    },
    created() {
        this.updateList();
        this.$watch(
            () => this.$route.params,
            (toParams) => {
                this.yrke = toParams.ort;   // for some reason they are swapped, might look into this later
                this.ort = toParams.yrke;
                if (this.ort === "all") {
                    this.ort = "";
                }
                if (this.yrke === "all") {
                    this.yrke = "";
                }
                this.updateList();
            });
    },
    methods: {
        toggleAllSkills(skills) {
            this.selectedSkills = [...skills];
        },

        filterSkill(selectedSkill) {

            let selectedSkillIndex = this.selectedSkills.indexOf(selectedSkill);
            if (selectedSkillIndex === -1) {
                this.selectedSkills.push(selectedSkill);
            } else {
                this.selectedSkills.splice(selectedSkillIndex, 1);
            }
            this.updateList();
        },

        changeMinPrice(newPrice) {
            this.minPrice = newPrice;
            console.log("new minprice: " + this.minPrice);
            this.updateList();
        },

        changeMaxPrice(newPrice) {
            this.maxPrice = newPrice;
            console.log("new maxprice: " + this.maxPrice);
            this.updateList();
        },

        allSkillsRequiredSwitch() {
            this.isAllSkillsRequired = !this.isAllSkillsRequired;
            this.updateList();
        },

        updateSort() {
            let sortOptions = this.sort.split('-');
            if (sortOptions[0] === "reviews") {
                this.sortByRating(sortOptions[1] === "true");
            } else {
                this.sortByPrice(sortOptions[1] === "true");
            }
        },

        sortByRating(isReversed) {
            let reverseResult = this.getReversedValue(isReversed);
            this.programmerare.sort((a, b) => {
                if (this.avgRating(a.reviews) > this.avgRating(b.reviews)) {
                    return -1 * reverseResult;
                } else if (this.avgRating(a.reviews) < this.avgRating(b.reviews)) {
                    return 1 * reverseResult;
                }
                return 0;
            });
        },

        sortByPrice(isReversed) {
            let reverseResult = this.getReversedValue(isReversed);
            this.programmerare.sort((a, b) => {
                if (a.price > b.price) {
                    return -1 * reverseResult;
                } else if (a.price < b.price) {
                    return 1 * reverseResult;
                }
                return 0;
            })
        },

        getReversedValue(isReversed) {
            return isReversed ? -1 : 1;
        },

        updateList() {
            this.programmerare = data.getFilteredResults(this.yrke, this.ort, this.selectedSkills, this.minPrice, this.maxPrice, this.isAllSkillsRequired);
        },

        avgRating(progreviews) {
            let totalScore = 0;
            progreviews.forEach((review) => totalScore += parseInt(review.rating));
            if (totalScore === 0) {
                return "inga recensioner än";
            }
            return Math.round((totalScore / progreviews.length) * 10) / 10;
        },

        showReviews(prog) {
            this.showReviewsProg = prog;
            console.log(this.showReviewsProg);
        },

        hideReviews() {
            this.showReviewsProg = "";
        },

        beginReview(prog) {
            this.currentReviewProg = prog;
        },

        cancelReview() {
            this.clearReviewVariables();
        },

        addReview() {
            data.addReview(this.currentReviewProg, this.rating, this.reviewText);
            this.clearReviewVariables();
            this.updateList();
        },

        clearReviewVariables() {
            this.currentReviewProg = "";
            this.score = 5;
            this.reviewText = "";
        }
    }

}
</script>
<style scoped>
.body {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0px;
}

.filterTable {
    color: white;
    background: rgba(9, 9, 121, 1);
    display: flex;
    flex-direction: column;

}

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

.programmerarecolumn {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.emptyList {
    font-size: 5.5vw;
    color: blue;

}
</style>