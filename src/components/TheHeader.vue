<template>

    <body>

        <div class="logo">
            <img alt="Vue logo" class="logo" src="@/assets/SiggeDrip.jpeg" width="50%" height="50%" />
            <h1>Hitta programmerare</h1>
            <div class="headerLinks">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    </body>
</template>
<script>
export default {

}
</script>
<style scoped>
body {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: darkgray;
}

.logo {
    display: grid;
    grid-template-columns: 1fr 2fr 4fr;
    align-items: center;
}

h1 {
    font-size: 3vw;
}

a {
    text-decoration: none;
    color: black;
    transition: 1s;
}

a:hover {
    text-decoration: dashed;
    color: lime;
    transition: 1s;
}

.headerLinks {
    font-size: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}
</style>