<script setup>
import { projectCaseStudies, archiveProjects } from '@/data/portfolioData.js';
</script>

<template>
    <div class="container-xl py-14">
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

            <!-- Section 1: Enterprise Case Studies -->
            <div>
                <div class="text-center mb-12">
                    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
                        FEATURED <span class="text-teal-700">CASE STUDIES</span>
                    </h1>
                    <p class="text-slate-700 text-base sm:text-lg font-medium max-w-2xl mx-auto">
                        Enterprise software built for production environments using Flutter, Clean Architecture, and
                        RESTful APIs.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="study in projectCaseStudies" :key="study.id"
                        class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-teal-500/50 transition-all duration-300">
                        <div>
                            <span class="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold">
                                {{ study.category }}
                            </span>
                            <h2 class="text-2xl font-bold text-slate-100 my-2">{{ study.title }}</h2>
                            <p class="text-slate-300 text-sm leading-relaxed mb-6 font-normal">{{ study.description }}
                            </p>

                            <!-- Tech Stack Pills -->
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span v-for="tech in study.stack" :key="tech"
                                    class="px-3 py-1 rounded bg-slate-800 text-teal-300 text-xs font-mono border border-teal-500/30">
                                    {{ tech }}
                                </span>
                            </div>

                            <!-- Architecture Highlights -->
                            <h3 class="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-3">Key
                                Development Highlights</h3>
                            <ul
                                class="space-y-2 border-t border-slate-800 pt-4 text-xs text-slate-300 list-disc list-inside">
                                <li v-for="(highlight, idx) in study.highlights" :key="idx">
                                    {{ highlight }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 2: Previous Web & Capstone Systems -->
            <div class="border-t border-slate-300 pt-16">
                <div class="text-center mb-12">
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                        PREVIOUS <span class="text-teal-700">PROJECTS</span>
                    </h2>
                    <p class="text-slate-700 text-base font-medium max-w-2xl mx-auto">
                        Full-stack web applications and software systems built during earlier freelance and academic
                        work.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="project in archiveProjects" :key="project.id"
                        class="flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">

                        <figure class="p-4 bg-slate-950/50 border-b border-slate-800">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-48 object-cover rounded-xl border border-slate-800 shadow-sm" />
                        </figure>

                        <div class="flex flex-col flex-grow p-6 text-slate-300">
                            <span class="text-xs font-mono text-teal-400 font-semibold mb-1">{{ project.type }}</span>
                            <h3 class="text-xl font-bold text-slate-100 mb-3">{{ project.title }}</h3>

                            <p class="text-sm leading-relaxed text-slate-300 mb-6 flex-grow font-normal">
                                {{ project.description }}
                            </p>

                            <!-- Tech Stack -->
                            <div class="flex flex-wrap gap-1.5 mb-6">
                                <span v-for="tech in project.stack" :key="tech"
                                    class="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700">
                                    {{ tech }}
                                </span>
                            </div>

                            <div class="flex justify-center pt-2 mt-auto border-t border-slate-800/80">
                                <a :href="project.github" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 text-teal-300 border border-slate-700 font-semibold text-sm hover:bg-slate-700 hover:border-teal-400 hover:text-teal-200 transition-colors duration-200 shadow-md">
                                    <font-awesome-icon icon="fa-brands fa-github" class="size-5" />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<style scoped>
.container-xl {
    background-image: url('/assets/img/programmer-bg-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-color: #f8fafc;
    padding: 4rem 0;
}
</style>