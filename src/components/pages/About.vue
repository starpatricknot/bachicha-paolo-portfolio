<script setup>
import programming from '/assets/img/programming-photo-6.png';
import tailwindIcon from '/assets/img/tailwind-icon.png';
import vscodeIcon from '/assets/img/vscode-icon.png';

const skills = [
    { name: 'Flutter', icon: 'fa-brands fa-flutter' },
    { name: 'Dart', icon: 'fa-solid fa-code' },
    { name: 'PHP', icon: 'fa-brands fa-php' },
    { name: 'Laravel', icon: 'fa-brands fa-laravel' },
    { name: 'Supabase', icon: 'fa-solid fa-database' },
    { name: 'MySQL', icon: 'fa-solid fa-server' },
    { name: 'RESTful APIs', icon: 'fa-solid fa-network-wired' },
    { name: 'Clean Architecture', icon: 'fa-solid fa-cubes' },
    { name: 'BLoC Pattern', icon: 'fa-solid fa-layer-group' },
    { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
    { name: 'Tailwind CSS', isCustomIcon: true, icon: tailwindIcon },
    { name: 'JavaScript', icon: 'fa-brands fa-js' }
];

const tools = [
    { name: 'VS Code', isCustomIcon: true, icon: vscodeIcon },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
    { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
    { name: 'Figma', icon: 'fa-brands fa-figma' },
    { name: 'Slack', icon: 'fa-brands fa-slack' }
];
</script>

<template>
    <div class="container-xl py-14">
        <!-- Intro / Bio Section -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="flex flex-col-reverse md:flex-row items-center gap-12">

                <!-- Text Section -->
                <div class="md:w-1/2 text-left space-y-6">
                    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                        KNOW MORE ABOUT <span class="text-teal-700">ME</span>
                    </h1>

                    <p class="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                        Hello! I’m <span class="font-bold text-slate-900">Paolo Zapatero Bachicha</span>, an Application
                        Developer
                        specializing in cross-platform mobile and web applications. I graduated with a Bachelor of
                        Science
                        in Information Technology from Laguna State Polytechnic University - San Pablo City Campus in
                        August
                        2024.
                    </p>

                    <p class="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                        Currently, I work as an Application Developer at <span
                            class="font-bold text-teal-700">OneClickTech</span>, where I build enterprise Point-of-Sale
                        systems (KwikPOS) and automated mall integration modules using Flutter, Dart, Clean
                        Architecture,
                        BLoC state management, Supabase, and RESTful APIs.
                    </p>

                    <div class="pt-2">
                        <p class="text-lg font-bold text-slate-900 mb-4">
                            When I'm not coding, I enjoy:
                        </p>
                        <ul class="space-y-3 font-medium text-slate-700">
                            <li class="text-base sm:text-lg flex items-center gap-3">
                                <font-awesome-icon icon="fa-regular fa-thumbs-up" class="size-5 text-teal-700" />
                                Reading Books & Manga
                            </li>
                            <li class="text-base sm:text-lg flex items-center gap-3">
                                <font-awesome-icon icon="fa-regular fa-thumbs-up" class="size-5 text-teal-700" />
                                Playing Games
                            </li>
                            <li class="text-base sm:text-lg flex items-center gap-3">
                                <font-awesome-icon icon="fa-regular fa-thumbs-up" class="size-5 text-teal-700" />
                                Watching Movies & Anime
                            </li>
                            <li class="text-base sm:text-lg flex items-center gap-3">
                                <font-awesome-icon icon="fa-regular fa-thumbs-up" class="size-5 text-teal-700" />
                                Building Personal Side Projects
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Illustration Section -->
                <div class="md:w-1/2 flex justify-center items-center">
                    <img class="h-auto w-full max-w-md object-center" :src="programming"
                        alt="Programming Illustration" />
                </div>
            </div>
        </section>

        <!-- SKILLS Showcase -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-300">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-8">
                SKILLS & <span class="text-teal-700">TECHNOLOGIES</span>
            </h2>

            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl">
                <div v-for="skill in skills" :key="skill.name"
                    class="flex flex-col items-center justify-center gap-3 h-28 sm:h-36 bg-slate-800/90 text-teal-300 rounded-xl border border-slate-700/80 shadow-md hover:bg-slate-800 hover:border-teal-400 hover:text-teal-200 transition-all duration-200 hover:-translate-y-1">
                    <img v-if="skill.isCustomIcon" :src="skill.icon" :alt="skill.name"
                        class="size-10 sm:size-12 object-contain" />
                    <font-awesome-icon v-else :icon="skill.icon" class="size-10 sm:size-12" />
                    <span class="text-xs font-mono font-semibold text-slate-300 tracking-wide text-center px-2">{{
                        skill.name }}</span>
                </div>
            </div>
        </section>

        <!-- TOOLS Showcase -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-300">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-8">
                TOOLS I <span class="text-teal-700">USE</span>
            </h2>

            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 p-6 sm:p-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl">
                <div v-for="tool in tools" :key="tool.name"
                    class="flex flex-col items-center justify-center gap-3 h-28 sm:h-36 bg-slate-800/90 text-teal-300 rounded-xl border border-slate-700/80 shadow-md hover:bg-slate-800 hover:border-teal-400 hover:text-teal-200 transition-all duration-200 hover:-translate-y-1">
                    <img v-if="tool.isCustomIcon" :src="tool.icon" :alt="tool.name"
                        class="size-10 sm:size-12 object-contain" />
                    <font-awesome-icon v-else :icon="tool.icon" class="size-10 sm:size-12" />
                    <span class="text-xs font-mono font-semibold text-slate-300 tracking-wide text-center px-2">{{
                        tool.name }}</span>
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