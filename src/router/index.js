import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/components/pages/Home.vue'
import NotFoundView from '@/components/NotFound.vue'
import AboutView from "../components/pages/About.vue";
import ResumeView from "../components/pages/Resume.vue";
import ContactView from "../components/pages/Contact.vue";
import ProjectsView from "../components/pages/Projects..vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //pages
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView,
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        //page not found
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundView,
        },
    ]
});

export default router
