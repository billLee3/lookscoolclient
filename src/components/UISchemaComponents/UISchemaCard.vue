<script setup>
import router from '@/router';
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
router

const props = defineProps({
    schema: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true
    }
});

const navigateToDetail = () => {
          router.push('/schemadetail');
        };
</script>

<template>
    <div class="card">
        <div class="card-header">
            {{schema.name}}
        </div>
        <div class="card-body">
            <h5 class="card-title">Colors</h5>
            <p class="card-text">{{ schema.backgroundColorPrimary }}</p>
            <RouterLink :to="{name: 'schemadetail', params: {id: schema.id}}" />
        </div>
    </div>
</template>