import { reactive } from "vue";
import { getFirestore, collection, getDocs, QuerySnapshot } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwexZTg0zdlgHbz43fIqbi-H39CfpOnXI",
    authDomain: "hittaprogrammerare-de354.firebaseapp.com",
    projectId: "hittaprogrammerare-de354",
    storageBucket: "hittaprogrammerare-de354.appspot.com",
    messagingSenderId: "341446977298",
    appId: "1:341446977298:web:aa48695c20bd7a9f23f5cb",
    measurementId: "G-6KLHJF0GEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
getAuth();

/*
export default {
    data() {
        return {
            programmerare: [] 
        }
    },
    methods: {
        loadProgrammare() {
            // ...
        }
    }
    mounted() {
        loadProgrammarare();
    }
} */

export const data = reactive({
    /*programmerare: [
        {
            name: "Sampas system",
            yrke: "systemutvecklare",
            ort: "Stockholm",
            skills: ["python", "c", "c++"],
            price: 500000,
            aboutUs: "Sampas system är en programmeringsfirma som tror på robusta och " +
                "effektiva system som får jobbet gjort.",
            reviews: []
        },
        {
            name: "Henkes hemsidor",
            yrke: "webbutvecklare",
            ort: "Borås",
            skills: ["javascript", "vue", "svelte"],
            price: 400000,
            aboutUs: "Henkes hemsidor tror på att en hemsida ska vara responsiv, stilig " +
                "och modern.",
            reviews: []
        },
        {
            name: "Ivars infrastruktur",
            yrke: "systemutvecklare",
            ort: "Stockholm",
            skills: ["assembly", "c", "rust"],
            price: 450000,
            aboutUs: "Ivars infrastruktur fokuserar på binär nivå att skapa en säker " +
                "och pålitlig plattform.",
            reviews: []
        }
    ],*/


    programmerare: [],
    programmerareIsLoaded: false,

    async loadProgrammerare() {
        const querySnapshot = await getDocs(collection(db, 'Programmerare'));
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            this.programmerare.push(doc.data())
        });
        this.programmerare.forEach((prog) => {
            console.log(prog.yrke);
        })
        this.programmerareIsLoaded = true;
    },

    addProgrammerare(name, yrke, ort, skills, price, aboutUs) {
        this.programmerare.push(name, yrke.toLowerCase, ort.toLowerCase, skills, price, aboutUs)
    },

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
        yrke = yrke.toLowerCase();
        ort = ort.toLowerCase();
        if (isAllSkillsRequired) {
            console.log("all skills");
            return this.programmerare.filter((element) =>
                element.yrke.toLowerCase().includes(yrke) &&
                element.ort.toLowerCase().includes(ort) &&
                this.filterAllSkillsRequired(element.skills, skills) &&
                element.price <= maxPrice &&
                element.price >= minPrice
            );
        }
        else {
            console.log("en skill");
            return this.programmerare.filter((element) =>
                element.yrke.toLowerCase().includes(yrke) &&
                element.ort.toLowerCase().includes(ort) &&
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