<script setup>
import srsProject from '/assets/img/project-screenshot/srs-project.png';
import pmsProject from '/assets/img/project-screenshot/pms-project.png';
import oairProject from '/assets/img/project-screenshot/oair-project.png';
</script>

<template>
    <section class="container-xl py-14">
        <div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- <h1 class="text-2xl md:text-4xl font-semibold text-dark-600 mb-6 text-center">MY RESUME</h1> -->
            <div class="text-center mb-8">
                <h1 class="text-2xl md:text-4xl font-bold text-dark-600 text-center xl:mb-3 drop-shadow-lg">MY RECENT
                    <span class="text-red-600">WORKS</span>
                </h1>
                <p class="text-md md:text-lg text-dark-600 drop-shadow-lg">Here are some of the few projects I've made
                    recently.</p>
            </div>

            <!-- SKILLS and TOOLS Showcase -->
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div
                    class="card card-normal bg-white shadow-xl hover:bg-white border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <figure class="px-5 pt-5">
                        <img :src="srsProject" alt="Specialization Recommendation System Image"
                            class="rounded-xl shadow-sm border border-slate-300" />
                    </figure>
                    <div class="card-body text-dark-600 p-4">
                        <h2 class="card-title justify-center text-center text-lg md:text-xl">Specialization
                            Recommendation System</h2>
                        <p class="text-justify text-sm md:text-base">
                            Specialization Recommendation System for personalized career and learning paths, built with
                            vanilla PHP, Bootstrap, CSS, and JavaScript. Features include machine learning for
                            grade-based and assessment-based recommendations, plus OpenAI integration for
                            preference-based suggestions.
                        </p>
                        <div class="card-actions justify-center">
                            <a href="https://github.com/starpatricknot/specialization-recommendation-system" target="_blank"
                                class="btn border-none bg-red-700 text-white">
                                <font-awesome-icon icon="fa-brands fa-github" class="size-6" /> Github
                            </a>
                            <!-- <a href="https://github.com/starpatricknot/specialization-recommendation-system"
                                class="btn border-none bg-red-700 text-white">
                                <font-awesome-icon icon="fa-solid fa-laptop-code" class="size-6" /> Demo
                            </a> -->
                        </div>
                    </div>
                </div>
                <div
                    class="card card-normal bg-white shadow-xl hover:bg-white border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <figure class="px-5 pt-5">
                        <img :src="pmsProject" alt="Specialization Recommendation System Image"
                            class="rounded-xl shadow-sm border border-slate-300" />
                    </figure>
                    <div class="card-body text-dark-600 p-4">
                        <h2 class="card-title justify-center text-center text-lg md:text-xl">Project Management System
                        </h2>
                        <p class="text-justify text-sm md:text-base">
                            Project Management System developed with vanilla PHP, Bootstrap, CSS, and JavaScript. It
                            helps companies manage and organize projects and tasks efficiently, improving workflow and
                            productivity. Features include task tracking, project timelines, and a communication system
                            where project managers and employees can add comments on task updates.
                        </p>
                        <div class="card-actions justify-center">
                            <a href="https://github.com/starpatricknot/project_management_system" target="_blank"
                                class="btn border-none bg-red-700 text-white">
                                <font-awesome-icon icon="fa-brands fa-github" class="size-6" /> Github
                            </a>
                            <!-- <a href="https://github.com/starpatricknot/specialization-recommendation-system"
                                class="btn border-none bg-red-700 text-white">
                                <font-awesome-icon icon="fa-solid fa-laptop-code" class="size-6" /> Demo
                            </a> -->
                        </div>
                    </div>
                </div>
                <div
                    class="card card-normal bg-white shadow-xl hover:bg-white border hover:border-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <figure class="px-5 pt-5">
                        <img :src="oairProject" alt="Specialization Recommendation System Image"
                            class="rounded-xl shadow-sm border border-slate-300" />
                    </figure>
                    <div class="card-body text-dark-600 p-4">
                        <h2 class="card-title justify-center text-center text-lg md:text-xl">Online Agricultural
                            Insurance System</h2>
                        <p class="text-justify text-sm md:text-base">
                            Online Agricultural Insurance System developed with vanilla PHP, Bootstrap, CSS, and
                            JavaScript. This system simplifies insurance management for farmers, offering
                            functionalities to apply for various types of insurance.
                            It streamlines the insurance process, making it more
                            accessible and efficient for farmers.
                        </p>
                        <div class="card-actions justify-center">
                            <a href="https://github.com/starpatricknot/oair_system" target="_blank"
                                class="btn border-none bg-red-700 text-white">
                                <font-awesome-icon icon="fa-brands fa-github" class="size-6" /> Github
                            </a>
                            <!-- <a href="https://github.com/starpatricknot/specialization-recommendation-system"
                                class="btn border-none bg-red-700 text-white">
                                <font-awesome-icon icon="fa-solid fa-laptop-code" class="size-6" /> Demo
                            </a> -->
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
/* Ensure the card image is responsive */
.card img {
    max-width: 100%;
    height: auto;
}

/* Responsive card text */
.card-body p {
    margin-bottom: 1rem;
}

/* Adjust the card size and layout on different screen sizes */
@media (max-width: 640px) {
    .card {
        max-width: 100%;
    }
}
</style>
