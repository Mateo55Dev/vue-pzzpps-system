<script setup>
import HeaderVue from '../components/shared/Header.vue';
import LogoutVue from '../components/shared/Logout.vue';
import AsideNav from '../components/shared/AsideNav.vue';
</script>

<template>

    <header class="header">
        <HeaderVue/>
        <LogoutVue/>
    </header>

    <div class="main-layout">
        <aside>
            <div class="aside">
                <AsideNav/>
            </div>
        </aside>
        
        <main>
            <div class="container">
                <slot/>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .header {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        background: #275db9;
    }
    
    .main-layout {
        display: grid;
        grid-template-columns: 230px 1fr;
    }

    .container{
        background-color: var(--vt-c-white);
        padding: 20px;
    }
</style>