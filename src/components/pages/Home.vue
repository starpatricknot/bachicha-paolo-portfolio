<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import profileImg from '/assets/img/paolo-pic.jpg';

// Typewriter state
const typeValue = ref('');
const typeStatus = ref(false);

const displayTextArray = ref([
    "PAOLO BACHICHA",
    "A FLUTTER & DART DEV",
    "AN APPLICATION DEVELOPER",
    "A FULL-STACK WEB DEVELOPER"
]);

const typingSpeed = 150;
const erasingSpeed = 100;
const newTextDelay = 2000;
const displayTextArrayIndex = ref(0);
const charIndex = ref(0);

let timeoutId = null;

const typeText = () => {
    if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(charIndex.value);
        charIndex.value += 1;
        timeoutId = setTimeout(typeText, typingSpeed);
    } else {
        typeStatus.value = false;
        timeoutId = setTimeout(eraseText, newTextDelay);
    }
};

const eraseText = () => {
    if (charIndex.value > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(0, charIndex.value - 1);
        charIndex.value -= 1;
        timeoutId = setTimeout(eraseText, erasingSpeed);
    } else {
        typeStatus.value = false;
        displayTextArrayIndex.value += 1;
        if (displayTextArrayIndex.value >= displayTextArray.value.length) displayTextArrayIndex.value = 0;
        timeoutId = setTimeout(typeText, typingSpeed + 500);
    }
};

onMounted(() => {
    timeoutId = setTimeout(typeText, newTextDelay + 200);
});

onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId);
});

const techBadges = [
    'Flutter',
    'Dart',
    'PHP',
    'Laravel',
    'Supabase',
    'RESTful APIs',
    'Clean Architecture',
    'BLoC Pattern',
    'MySQL'
];
</script>

<template>
    <div class="container-xl py-14">

        <!-- Hero Section -->
        <section
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-[calc(100vh-4rem)] flex items-center">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                <!-- Left: Text & CTA -->
                <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div
                        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-teal-300 border border-slate-800 text-xs font-mono tracking-wide shadow-md">
                        <span class="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
                        Available for Opportunities
                    </div>

                    <h1
                        class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        I’M <span class="text-teal-700 font-mono">{{ typeValue }}</span>
                        <span class="blinking-cursor">|</span>
                    </h1>

                    <p
                        class="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                        Application Developer crafting high-performance cross-platform mobile and web applications.
                        Specialized in Clean Architecture, BLoC state management, Supabase, and RESTful API
                        integrations—with
                        a proven track record in Development enterprise Point-of-Sale (KwikPOS) and mall system
                        integrations.
                    </p>

                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        <RouterLink to="/projects"
                            class="px-6 py-3.5 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 active:bg-teal-800 transition-colors duration-200 shadow-md">
                            View Case Studies
                        </RouterLink>

                        <a href="/assets/documents/paolo-bachicha-resume.pdf" download target="_blank"
                            rel="noopener noreferrer"
                            class="px-6 py-3.5 rounded-lg bg-slate-900 text-teal-300 border border-slate-800 font-semibold hover:bg-slate-800 hover:text-teal-200 transition-colors duration-200 flex items-center gap-2 shadow-md">
                            <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>

                <!-- Right: Code Preview Component -->
                <div class="lg:col-span-5">
                    <div class="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl">
                        <div class="flex items-center gap-2 border-b border-slate-800 pb-4 mb-4">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                            <span class="text-xs font-mono text-slate-400 ml-2">application_developer.dart</span>
                        </div>

                        <pre class="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto">
<span class="text-purple-400">class</span> <span class="text-amber-300">ApplicationDeveloper</span> {
<span class="text-purple-400">final</span> String name = <span class="text-teal-300">'Paolo Bachicha'</span>;
<span class="text-purple-400">final</span> String role = <span class="text-teal-300">'Application Developer'</span>;
<span class="text-purple-400">final</span> List&lt;String&gt; coreStack = [
    <span class="text-teal-300">'Flutter'</span>, 
    <span class="text-teal-300">'Dart'</span>, 
    <span class="text-teal-300">'PHP'</span>, 
    <span class="text-teal-300">'Laravel'</span>
];
<span class="text-purple-400">final</span> String architecture = <span class="text-teal-300">'Clean Architecture + BLoC'</span>;
}
                        </pre>
                    </div>
                </div>

            </div>
        </section>

        <!-- About Summary Section -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-300">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div class="lg:col-span-8 space-y-6">
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        A LITTLE BIT ABOUT <span class="text-teal-700">ME</span>
                    </h2>

                    <div class="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
                        <p>
                            I specialize in end-to-end mobile and web development, taking robust enterprise application
                            features
                            from initial architectural planning through deployment and ongoing optimization.
                        </p>
                        <p>
                            My technical foundation relies on Flutter and Dart for fluid, cross-platform client
                            applications,
                            paired with PHP and Laravel to build secure, scalable API services and relational database
                            structures.
                        </p>
                        <p>
                            Prioritizing code maintainability, I structure software using Clean Architecture principles
                            and the BLoC
                            pattern. This ensures critical business logic remains decoupled, fully testable, and
                            resilient under heavy usage.
                        </p>
                        <p>
                            From Development mission-critical Point-of-Sale systems (KwikPOS) to configuring automated
                            data syncs for
                            mall IT infrastructures, I deliver software built for long-term scalability and business
                            impact.
                        </p>
                    </div>

                    <!-- Quick Skills Pills -->
                    <div class="pt-4">
                        <h3 class="text-xs font-mono text-slate-900 uppercase tracking-wider mb-3 font-bold">
                            Core Competencies
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="badge in techBadges" :key="badge"
                                class="px-3.5 py-1.5 rounded-md bg-slate-900 text-teal-300 text-xs font-mono border border-slate-800 shadow-sm font-semibold">
                                {{ badge }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Profile Image Column -->
                <div class="lg:col-span-4 flex justify-center">
                    <div class="relative">
                        <img class="relative h-64 w-64 sm:h-72 sm:w-72 object-cover rounded-full shadow-2xl border-4 border-slate-900"
                            :src="profileImg" alt="Paolo Bachicha" />
                    </div>
                </div>

            </div>
        </section>

        <!-- Social Links Section -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-300 text-center">
            <h2 class="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                CONNECT WITH <span class="text-teal-700">ME</span>
            </h2>
            <p class="text-slate-600 text-sm mb-8 font-medium">Feel free to reach out for technical collaborations or
                career opportunities</p>

            <div class="flex justify-center gap-4 sm:gap-6 items-center">
                <a href="https://github.com/starpatricknot" target="_blank" aria-label="GitHub"
                    class="p-3.5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 hover:text-teal-300 hover:bg-slate-800 transition-colors duration-200 shadow-md">
                    <font-awesome-icon icon="fa-brands fa-github" size="xl" />
                </a>

                <a href="https://www.linkedin.com/in/paolo-bachicha/" target="_blank" aria-label="LinkedIn"
                    class="p-3.5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 hover:text-teal-300 hover:bg-slate-800 transition-colors duration-200 shadow-md">
                    <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" />
                </a>

                <a href="https://www.instagram.com/paoloo0o/" target="_blank" aria-label="Instagram"
                    class="p-3.5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 hover:text-teal-300 hover:bg-slate-800 transition-colors duration-200 shadow-md">
                    <font-awesome-icon icon="fa-brands fa-instagram" size="xl" />
                </a>

                <a href="https://www.facebook.com/bachichapaoloo" target="_blank" aria-label="Facebook"
                    class="p-3.5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 hover:text-teal-300 hover:bg-slate-800 transition-colors duration-200 shadow-md">
                    <font-awesome-icon icon="fa-brands fa-facebook" size="xl" />
                </a>
            </div>
        </section>

    </div>
</template>

<style scoped>
.blinking-cursor {
    font-size: 1.5rem;
    color: #0f766e;
    /* Dark teal-700 for high visibility on light background */
    animation: 1s blink step-end infinite;
}

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

@keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #0f766e;
    }
}
</style>