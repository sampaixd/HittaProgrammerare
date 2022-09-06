<template>
    <div>
        <span>Yrke</span>
        <span>Ort</span>
        <span></span>
        <input v-model="yrke" placeholder="Webbutvecklare">
        <input v-model="ort" placeholder="Stockholm">
        <button type="button" @click="search">Hitta programmerare</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            yrke: "",
            allYrke: ["webbutvecklare", "systemutvecklare", "databasansvarig"],
            selectedYrke: ["webbutvecklare", "systemutvecklare", "databasansvarig"],
            ort: "",
            allOrt: ["stockholm", "borås", "solna"],
            selectedOrt: ["stockholm", "borås", "solna"]

        }
    },
    methods: {
        search(){
            let yrkeData = this.yrke;
            let ortData = this.ort;
            if (this.yrke === ""){
                yrkeData = "all";
            }
            if (this.ort === ""){
                ortData = "all";
            }

            this.$emit("search", yrkeData, ortData);

        },
    }
}
</script>
<style scoped>
div {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
}

span {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 1.5vw;
}

input {
    display: flex;
    justify-content: center;
    font-size: 1.5vw;
}

button{
    font-size: 1.5vw;
}
</style>