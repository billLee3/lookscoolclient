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
            path: '/schemadetail/:id',
            name: 'schemadetail',
            component: UiSchemaDetailView, 
            props: true
        }
    ]
});

export default router;

