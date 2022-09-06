import { reactive } from "vue";




export const data = reactive({
    programmerare: [
        {
            name: "Sampas system",
            yrke: "systemutvecklare",
            ort: "stockholm",
            skills: ["python", "c", "c++"],
            price: 500000,
            aboutUs: "Sampas system är en programmeringsfirma som tror på robusta och " +
                "effektiva system som får jobbet gjort.",
            reviews: []
        },
        {
            name: "Henkes hemsidor",
            yrke: "webbutvecklare",
            ort: "borås",
            skills: ["javascript", "vue", "svelte"],
            price: 400000,
            aboutUs: "Henkes hemsidor tror på att en hemsida ska vara responsiv, stilig " +
                "och modern.",
            reviews: []
        },
        {
            name: "Ivars infrastruktur",
            yrke: "systemutvecklare",
            ort: "stockholm",
            skills: ["assembly", "c", "rust"],
            price: 450000,
            aboutUs: "Ivars infrastruktur fokuserar på binär nivå att skapa en säker " +
                "och pålitlig plattform.",
            reviews: []
        }
    ],

    addProgrammerare(name, yrke, ort, skills, price, aboutUs) {
        this.programmerare.push(name, yrke.toLowerCase, ort.toLowerCase, skills, price, aboutUs)
    },

    /*addReview(programmerare, rating, reviewText) {
        let index = this.programmerare.indexOf(programmerare);
        if (index >= 0) {
          this.programmerare[index].reviews.push({rating, reviewText});
        } else {
          console.error("Error! Trying to add review to non-existing programmer!");
        }
      },*/

    addReview(programmerare, rating, reviewText) {
        console.log("yo");
        let index = 0;
        try {
            index = this.findProgrammerareIndex(programmerare);
        } catch (ReferenceError) {
            console.error("review error: programmerare does not exist");
            return;
        }
        console.log("yo 2");
        this.programmerare[index].reviews.push({ rating, reviewText });
    },

    calculateReviewScore(programmerare) {
        let index = 0;
        try {
            index = this.findProgrammerareIndex(programmerare);
        }
        catch (ReferenceError) {
            return;
        }
        let totalScore = 0;
        let reviewCount = 0;
        this.programmerare[index].reviews.forEach((review) => {
            totalScore += review.score;
            reviewCount++;
        });
        return totalScore / reviewCount;

    },

    findProgrammerareIndex(programmerare) {
        console.log("programmerare: " + programmerare);
        console.log("indexof: " + this.programmerare.indexOf(programmerare));
        let reviewedProgrammerareIndex = this.programmerare.indexOf(programmerare);
        if (reviewedProgrammerareIndex === -1) {
            console.error("review error: programmerare does not exist");
            throw new ReferenceError();
        }
        return reviewedProgrammerareIndex;
    },

    getFilteredResults(yrke, ort, skills, minPrice, maxPrice, isAllSkillsRequired) {
        if (isAllSkillsRequired) {
            console.log("all skills");
            return this.programmerare.filter((element) =>
                element.yrke.indexOf(yrke.toLowerCase()) !== -1 &&
                element.ort.indexOf(ort.toLowerCase()) !== -1 &&
                this.filterAllSkillsRequired(element.skills, skills) &&
                element.price <= maxPrice &&
                element.price >= minPrice
            );
        }
        else {
            console.log("en skill");
            return this.programmerare.filter((element) =>
            element.yrke.indexOf(yrke) !== -1 &&
            element.ort.indexOf(ort) !== -1 &&
                this.filterOneSkillRequired(element.skills, skills) &&
                element.price <= maxPrice &&
                element.price >= minPrice
            );
        }

    },

    filterOneSkillRequired(progSkills, selectedSkills) {
        console.log("i en skill algoritm");
        let foundSkill = false;
        progSkills.some((skill) => {
            if (selectedSkills.includes(skill)) {
                foundSkill = true;
                return true;
            }
        });
        if (foundSkill) {
            return true;
        }
        return false;
    },

    filterAllSkillsRequired(progSkills, selectedSkills) {
        console.log("i all skills algoritm");
        let foundMissingSkill = false;
        selectedSkills.some((skill) => {
            if ((progSkills.includes(skill)) === false) {
                foundMissingSkill = true;
                return true;
            }
        });
        console.log(foundMissingSkill);
        if (foundMissingSkill) {
            return false;
        }
        return true;
    }
});