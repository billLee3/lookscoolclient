import HomeView from '@/views/HomeView.vue';
import UiSchemaDetailView from '@/views/UiSchemaDetailView.vue';
import UserLoginView from '@/views/UserLoginView.vue';
import UserProfileView from '@/views/UserProfileView.vue';
import UserRegisterView from '@/views/UserRegisterView.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/schemadetail',
            name: 'schemadetail',
            component: UiSchemaDetailView
        },
        {
            path: '/register',
            name: 'register',
            component: UserRegisterView
        },
        {
            path: '/login',
            name: 'login',
            component: UserLoginView
        },
        {
            path: '/profile',
            name: 'profile',
            component: UserProfileView
        }
    ]
});

export default router;

