<script setup>
import { profileData, skillsData, experienceData } from '@/data/portfolioData.js';
</script>

<template>
    <div class="container-xl py-14">
        <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <!-- Header & Action -->
            <div
                class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-slate-300">
                <div>
                    <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">{{ profileData.name }}</h1>
                    <p class="text-teal-700 font-semibold font-mono text-sm mt-1">{{ profileData.title }}</p>
                </div>
                <a :href="profileData.contact.resumePdf" download target="_blank"
                    class="px-5 py-2.5 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors shadow-md text-sm flex items-center gap-2">
                    <font-awesome-icon icon="fa-solid fa-download" />
                    Download PDF Resume
                </a>
            </div>

            <!-- Work Experience Timeline -->
            <div class="space-y-8 mb-14">
                <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">Professional Experience</h2>

                <div v-for="job in experienceData" :key="job.id"
                    class="p-6 bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-teal-300">{{ job.role }}</h3>
                            <p class="text-slate-400 font-medium text-sm">{{ job.company }}</p>
                        </div>
                        <span
                            class="text-xs font-mono text-teal-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700/80 w-fit">
                            {{ job.period }}
                        </span>
                    </div>

                    <ul class="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                        <li v-for="(bullet, idx) in job.bullets" :key="idx">
                            {{ bullet }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Skills Summary Section -->
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
                <h2 class="text-xl font-bold text-teal-300 mb-4">Technical Breakdown</h2>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                    <div>
                        <h3 class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Languages</h3>
                        <p class="text-slate-200 font-medium">{{ skillsData.languages.join(', ') }}</p>
                    </div>
                    <div>
                        <h3 class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Frameworks</h3>
                        <p class="text-slate-200 font-medium">{{ skillsData.frameworks.join(', ') }}</p>
                    </div>
                    <div>
                        <h3 class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Tools & Architecture
                        </h3>
                        <p class="text-slate-200 font-medium">{{ skillsData.toolsAndDatabases.join(', ') }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.container-xl {
    background-image: url('/assets/img/programmer-bg-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-color: #f8fafc;
    /* Light slate fallback for white geometric image */
    padding: 4rem 0;
}
</style>