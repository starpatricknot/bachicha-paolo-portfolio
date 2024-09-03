<script setup>
import myResume from '/assets/documents/paolo-bachicha-resume.png';
</script>

<template>
    <section class="container-xl py-14">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- <h1 class="text-2xl md:text-4xl font-semibold text-dark-600 mb-6 text-center">MY RESUME</h1> -->
            <div class="text-center mb-8">
                <a href="/assets/documents/paolo-bachicha-resume.pdf" target="_blank"
                    class="inline-block bg-slate-900 text-white font-semibold py-2 px-14 rounded-md drop-shadow-md hover:bg-slate-700 transition-colors duration-300 text-lg">
                    <font-awesome-icon icon="fa-solid fa-download" class="size-6 mr-1" /> MY RESUME
                </a>
            </div>
            <div class="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <img class="w-full h-full drop-shadow-sm" :src="myResume" alt="Image display of my personal resume">
            </div>
        </div>
    </section>
</template>



<style scoped>
/* Additional styles if necessary */
</style>
