<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logo from '/assets/img/logo-v3.png';

// Reactive state for mobile menu visibility
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

// Close menu when clicking outside of it
const handleClickOutside = (event) => {
    const drawer = document.querySelector('.drawer-side');
    if (drawer && !drawer.contains(event.target) && isMenuOpen.value) {
        closeMenu();
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <header class="bg-slate-900 sticky top-0 z-50">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
            <div class="flex h-16 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <a class="block text-teal-600" href="#">
                        <span class="sr-only">Home</span>
                        <img class="h-8 w-auto" :src="logo" alt="Logo" />
                    </a>
                </div>

                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-7 text-md">
                            <li>
                                <RouterLink to="/"
                                    :class="['text-gray-500', isActiveLink('/') ? 'text-white' : 'hover:text-white']"
                                    @click="closeMenu">
                                    Home
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/about"
                                    :class="['text-gray-500', isActiveLink('/about') ? 'text-white' : 'hover:text-white']"
                                    @click="closeMenu">
                                    About
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/projects"
                                    :class="['text-gray-500', isActiveLink('/projects') ? 'text-white' : 'hover:text-white']"
                                    @click="closeMenu">
                                    Projects
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/resume"
                                    :class="['text-gray-500', isActiveLink('/resume') ? 'text-white' : 'hover:text-white']"
                                    @click="closeMenu">
                                    Resume
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/contact"
                                    :class="['text-gray-500', isActiveLink('/contact') ? 'text-white' : 'hover:text-white']"
                                    @click="closeMenu">
                                    Contact
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-4">
                        <div class="block md:hidden">
                            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="isMenuOpen" />
                            <label for="my-drawer-4"
                                class="drawer-button btn btn-sm btn-primary bg-blue-gray-900 border-none text-white hover:bg-blue-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Drawer Structure -->
    <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="isMenuOpen" />
        <div class="drawer-content">
            <!-- Page content here -->
        </div>
        <div class="drawer-side mt-16 z-50">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay" @click="closeMenu"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <!-- Sidebar content here -->
                <li>
                    <RouterLink to="/" :class="['text-gray-500', isActiveLink('/') ? 'text-white' : 'hover:text-white']"
                        @click="closeMenu">
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/about"
                        :class="['text-gray-500', isActiveLink('/about') ? 'text-white' : 'hover:text-white']"
                        @click="closeMenu">
                        About
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects"
                        :class="['text-gray-500', isActiveLink('/projects') ? 'text-white' : 'hover:text-white']"
                        @click="closeMenu">
                        Portfolio
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/resume"
                        :class="['text-gray-500', isActiveLink('/resume') ? 'text-white' : 'hover:text-white']"
                        @click="closeMenu">
                        Resume
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact"
                        :class="['text-gray-500', isActiveLink('/contact') ? 'text-white' : 'hover:text-white']"
                        @click="closeMenu">
                        Contact
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
/* You may need to add custom styles for drawer if necessary */
</style>
