<template>
    <div>
        <span>Yrke</span>
        <span>Ort</span>
        <span></span>
        <input v-model="yrke" placeholder="Webbutvecklare">
        <input v-model="ort" placeholder="Stockholm">
        <button type="button" @click="Search">Hitta programmerare</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            yrke: "",
            ort: ""
        }
    },
    methods: {
        Search(){
            if (this.yrke === ""){
                this.yrke = "webbutvecklare";
            }
            if (this.ort === ""){
                this.ort = "stockholm";
            }

            this.$emit("search", this.yrke, this.ort);

        }
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
    font-size: 1.5rem;
}

input {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
}
</style>