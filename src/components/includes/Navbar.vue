<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logo from '/assets/img/logo-v3.png';

// Route setup (called once at top level)
const route = useRoute();
const isMenuOpen = ref(false);

const isActiveLink = (routePath) => route.path === routePath;

const closeMenu = () => {
    isMenuOpen.value = false;
};

// Centralized navigation configuration
const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
];
</script>

<template>
    <header
        class="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800/60 shadow-lg transition-all duration-300">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">

                <!-- Brand Logo -->
                <div class="flex-shrink-0">
                    <RouterLink to="/" class="flex items-center gap-2 group" @click="closeMenu">
                        <img :src="logo" alt="Logo"
                            class="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
                    </RouterLink>
                </div>

                <!-- Desktop Navigation Links -->
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-8 text-sm font-medium">
                        <li v-for="item in navItems" :key="item.path">
                            <RouterLink :to="item.path" :class="[
                                'relative py-2 transition-colors duration-200',
                                isActiveLink(item.path)
                                    ? 'text-teal-400 font-semibold'
                                    : 'text-slate-300 hover:text-white'
                            ]">
                                {{ item.name }}
                                <!-- Animated Active Indicator -->
                                <span v-if="isActiveLink(item.path)"
                                    class="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-teal-400 transition-all duration-300"></span>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>

                <!-- Right Action & Mobile Toggle -->
                <div class="flex items-center gap-4">
                    <!-- CTA Button -->
                    <RouterLink to="/contact"
                        class="hidden md:inline-flex items-center justify-center rounded-lg bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-400 border border-teal-500/20 hover:bg-teal-500/20 hover:border-teal-500/40 transition-all duration-200">
                        Let's Talk
                    </RouterLink>

                    <!-- Mobile Hamburger / Close Button -->
                    <button type="button"
                        class="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 md:hidden"
                        @click="isMenuOpen = !isMenuOpen" :aria-expanded="isMenuOpen"
                        aria-label="Toggle Navigation Menu">
                        <svg class="h-6 w-6 transition-transform duration-200" :class="{ 'rotate-90': isMenuOpen }"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </header>

    <!-- Mobile Drawer Overlay -->
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden" @click="closeMenu">
        </div>
    </Transition>

    <!-- Mobile Side Drawer -->
    <Transition enter-active-class="transition duration-300 ease-out transform" enter-from-class="translate-x-full"
        enter-to-class="translate-x-0" leave-active-class="transition duration-200 ease-in transform"
        leave-from-class="translate-x-0" leave-to-class="translate-x-full">
        <aside v-if="isMenuOpen"
            class="fixed top-16 right-0 bottom-0 z-40 w-64 bg-slate-900 border-l border-slate-800/80 p-6 shadow-2xl md:hidden overflow-y-auto">
            <ul class="flex flex-col gap-3 text-base font-medium">
                <li v-for="item in navItems" :key="item.path">
                    <RouterLink :to="item.path" :class="[
                        'block rounded-lg px-4 py-2.5 transition-all duration-200',
                        isActiveLink(item.path)
                            ? 'bg-teal-500/10 text-teal-400 font-semibold border-l-4 border-teal-400'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    ]" @click="closeMenu">
                        {{ item.name }}
                    </RouterLink>
                </li>
            </ul>
        </aside>
    </Transition>
</template>