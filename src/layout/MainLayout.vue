<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>


<template>
    <Header />
    <main>
        <div class="max-w-7xl mx-auto p-6 lg:p-8">
            <slot/>
        </div>
    </main>
    <Footer />
</template>