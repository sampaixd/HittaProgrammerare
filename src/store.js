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
                "och pålitlig plattform."
        }
    ],

    addProgrammerare(name, yrke, ort, skills, price, aboutUs) {
        this.programmerare.push(name, yrke.toLowerCase, ort.toLowerCase, skills, price, aboutUs)
    },

    addReview(programmerareName, rating, reviewText) {

        let index = 0;
        try {
            index = this.findProgrammerareIndex(programmerareName);
        }
        catch (ReferenceError) {
            return;
        }
        this.programmerare[index].reviews.push(rating, reviewText);
    },

    calculateReviewScore(programmerareName) {
        let index = 0;
        try {
            index = this.findProgrammerareIndex(programmerareName);
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

    findProgrammerareIndex(programmerareName) {
        reviewedProgrammerareIndex = this.programmerare.indexOf(programmerareName);
        if (reviewedProgrammerareIndex === -1) {
            console.error("review error: programmerare does not exist");
            throw new ReferenceError;
        }
        return reviewedProgrammerareIndex;
    },

    getFilteredResults(yrke, ort, skills, price, isAllSkillsRequired) {
        if (isAllSkillsRequired) {
            console.log("all skills");
            return this.programmerare.filter((element) =>
                element.yrke === yrke.toLowerCase() &&
                element.ort === ort.toLowerCase() &&
                this.filterAllSkillsRequired(element.skills, skills) &&
                element.price <= price
            );
        }
        else {
            console.log("en skill");
            return this.programmerare.filter((element) =>
                element.yrke === yrke.toLowerCase() &&
                element.ort === ort.toLowerCase() &&
                this.filterOneSkillRequired(element.skills, skills) &&
                element.price <= price
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