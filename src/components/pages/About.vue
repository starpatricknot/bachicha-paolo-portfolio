<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import programming from '/assets/img/programming-photo-6.png';
import tailwindIcon from '/assets/img/tailwind-icon.png';
import vscodeIcon from '/assets/img/vscode-icon.png';

</script>

<template>

    <section class="container-xl bg-neutral-100 py-14">
        <div
            class="max-w-5xl mx-8 px-4 my-3 sm:px-6 lg:px-8 lg:py-10 flex flex-col-reverse md:flex-row items-center xl:max-w-7xl xl:mx-auto">
            <!-- Text Section -->
            <div class="md:w-1/2 text-justify  md:text-left md:pr-0 mb-12 md:mb-0">
                <h1 class="text-2xl md:text-4xl font-semibold text-dark-600 mb-4 drop-shadow text-center py-6">
                    KNOW MORE ABOUT ME
                </h1>
                <p class="text-lg md:text-xl  text-dark-600 drop-shadow-sm">
                    Hello everyone! I’m Paolo Zapatero Bachicha, a Bachelor of Science in Information Technology
                    graduate. I recently completed my degree on July 3, 2024, at Laguna State Polytechnic University -
                    San Pablo City Campus. Currently, I’m working as a freelance web developer and actively seeking a
                    full-time job.
                </p>
                <div class="mt-9">
                    <p class="text-lg md:text-xl mb-5 text-dark-600 drop-shadow-sm">
                        When I'm not coding, I enjoy:
                    </p>
                    <ul class="text-dark-600 ml-5 drop-shadow-sm">
                        <li class="text-lg md:text-xl my-2"><font-awesome-icon icon="fa-regular fa-thumbs-up"
                                class="size-6 mr-2" /> Reading Books and Mangas</li>
                        <li class="text-lg md:text-xl my-2"><font-awesome-icon icon="fa-regular fa-thumbs-up"
                                class="size-6 mr-2" /> Playing Games</li>
                        <li class="text-lg md:text-xl my-2"><font-awesome-icon icon="fa-regular fa-thumbs-up"
                                class="size-6 mr-2" /> Watching Movies and Movies</li>
                        <li class="text-lg md:text-xl my-2"><font-awesome-icon icon="fa-regular fa-thumbs-up"
                                class="size-6 mr-2" /> Working on Personal Projects</li>
                    </ul>
                </div>

                <div class="sm:hidden md:w-1/2 flex justify-center items-center py-6">
                    <img class="sm:hidden h-auto w-9/12 object-center" :src="programming" alt="Programming Image" />
                </div>
            </div>
            <!-- Profile Image Section -->
            <div class="md:w-1/2 flex justify-center items-center">
                <img class="hidden md:block h-auto w-9/12 object-center rounded-2xl drop-shadow-md" :src="programming"
                    alt="Programming Image" />
            </div>
        </div>

        <!-- SKILLS and TOOLS Showcase -->
        <div class="max-w-5xl mx-8 px-4 mt-16 sm:px-6 lg:px-8 lg:py-10 items-center xl:max-w-7xl xl:mx-auto">

            <!-- My Skills -->
            <h1 class="text-2xl md:text-4xl font-semibold text-dark-600 mb-4 drop-shadow text-center pt-6">
                SKILLS I'VE ACQUIRED SO FAR
            </h1>
            <div
                class="grid grid-cols-2 xl:grid-cols-4 gap-5 px-5 xl:pl-10 py-6 bg-light-300 border-2 rounded-xl mb-10">
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-html5" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-css3-alt" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-js" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-bootstrap" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-php" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-laravel" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-vuejs" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-64 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center px-9 xl:px-20 py-3 xl:py-3 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img :src="tailwindIcon" alt="Tailwind Icon" class="size-12 xl:size-24">
                </div>
            </div>

            <!-- My Tools -->
            <h1 class="text-2xl md:text-4xl font-semibold text-dark-600 mb-4 drop-shadow text-center pt-20">
                TOOLS I USE
            </h1>

            <div
                class="grid grid-cols-2 xl:grid-cols-5 gap-5 px-5 xl:pl-10 py-6 xl:mb-20 bg-light-300 border-2 xl:rounded-xl rounded-tl-xl rounded-tr-xl border-b-0">
                <div
                    class="xl:w-48 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-html5" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-48 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-github" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-48 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-figma" class="size-12 xl:size-20" />
                </div>
                <div
                    class="xl:w-48 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center p-4 xl:p-6 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <font-awesome-icon icon="fa-brands fa-slack" class="size-12 xl:size-20" />
                </div>
                <div
                    class="hidden xl:block xl:w-48 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center px-9 xl:px-12 py-3 xl:py-5 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img :src="vscodeIcon" alt="VSCode Icon" class="size-12 xl:size-20">
                </div>
            </div>
            <div class="md:hidden border-2 rounded-bl-xl rounded-br-xl border-t-0 pb-6 bg-light-300 mb-20">
                <div
                    class="md:hidden mx-24 xl:w-48 h-20 xl:h-32 bg-slate-800 text-white rounded-md drop-shadow-md text-center px-9 xl:px-12 py-3 xl:py-5 hover:bg-slate-900 border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img :src="vscodeIcon" alt="VSCode Icon" class="size-12 xl:size-20">
                </div>
            </div>
        </div>
    </section>

</template>


<style>
.container-xl {
    background-image: url('/assets/img/programmer-bg-2.jpg');
    /* Replace with your texture image path */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    /* Keeps background fixed during scroll */
    padding: 4rem 0;
    /* Ensure padding fits the new background */
}
</style>
