import HomeView from '@/views/HomeView.vue';
import UiSchemaDetailView from '@/views/UiSchemaDetailView.vue';
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
        }
    ]
});

export default router;

