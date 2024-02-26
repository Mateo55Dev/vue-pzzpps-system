<script setup>
import { RouterLink } from 'vue-router';
import LogoIcon from '../icons/LogoIcon.vue'
</script>

<template>
    <div class="header">
        <div class="banner">
             <RouterLink to="/home"><LogoIcon class="logo"/></RouterLink> 
            <h1>Podkarpacki Związek Zawodowy Pracowników Pomocy Społecznej</h1>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #275DB9;
    color: #ffffff;
    padding:  0 10px;;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 640px) {
        font-size: 0.5rem;
    }
    @media (min-width: 768px) {
        font-size: 0.7rem;
    }
    @media (min-width: 1024px) {
        font-size: 1rem;
    }

    .banner {
        display: flex;
    }
    .logo {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
 
</style>
