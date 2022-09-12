<template>
    <footer>
        <div class="content">
            <span>info</span>
            <span>weee</span>
            <span>wooo</span>
            <span>waaa</span>

        </div>
        <div class="content">
            <span>kontakt</span>
            <span>billgatesreal113@gmail.com</span>
            <span>08-733 04 55</span>
            <span>boop</span>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style scoped>
footer {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: darkgray;
    display: grid;
    grid-template-columns: 1fr 1fr;
    display: flex;
    justify-content: space-evenly;
}

.content {
    display: flex;
    flex-flow: column;
    align-items: flex-start;

}
</style>