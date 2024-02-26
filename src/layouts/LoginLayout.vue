<script setup>
import HeaderVue from '@/components/shared/Header.vue';
import Login from '@/components/shared/Login.vue';
</script>

<template>
    <div class="container">
        <HeaderVue/>
        <Login/>
    </div>
</template>


<style scoped>
    .container {
        background-color: #f8f8f8;
        min-height: 100vh;
    }
</style>