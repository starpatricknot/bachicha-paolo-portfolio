<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import logo from '/assets/img/logo-v3-black.png';

const currentYear = computed(() => new Date().getFullYear());

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/starpatricknot',
        icon: 'fa-brands fa-github'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/paolo-bachicha/',
        icon: 'fa-brands fa-linkedin'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/paoloo0o/',
        icon: 'fa-brands fa-instagram'
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/bachichapaoloo',
        icon: 'fa-brands fa-facebook'
    }
];
</script>

<template>
    <footer class="bg-white border-t border-slate-300">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">

            <!-- Logo -->
            <div class="flex justify-center">
                <RouterLink to="/" class="transition-transform duration-300 hover:scale-105">
                    <img class="h-12 w-auto object-contain" :src="logo" alt="Paolo Bachicha Logo" />
                </RouterLink>
            </div>

            <!-- Tagline & CTA -->
            <div class="text-center mt-4">
                <p class="mx-auto mt-2 max-w-md text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    Specializing in cross-platform mobile and web application development. Let's build something
                    impactful together!
                </p>

                <RouterLink to="/contact"
                    class="mt-6 inline-block rounded-lg bg-teal-700 px-8 py-3 text-xs sm:text-sm font-bold tracking-wider text-white uppercase transition-colors duration-200 hover:bg-teal-800 shadow-md">
                    Contact Me
                </RouterLink>
            </div>

            <!-- Bottom Bar -->
            <div
                class="mt-12 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
                <p class="text-center font-medium">
                    Developed by <span class="font-bold text-slate-900">Paolo Bachicha</span>
                </p>

                <p class="text-center font-medium">
                    Copyright &copy; {{ currentYear }} Paolo Bachicha. All rights reserved.
                </p>

                <!-- Social Icons -->
                <ul class="flex justify-center gap-5 sm:justify-end">
                    <li v-for="social in socialLinks" :key="social.name">
                        <a :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.name"
                            class="text-slate-700 hover:text-teal-700 transition-colors duration-200">
                            <font-awesome-icon :icon="social.icon" class="text-xl" />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </footer>
</template>