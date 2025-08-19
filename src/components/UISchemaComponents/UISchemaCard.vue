<script setup>
import { defineProps } from 'vue';

defineProps({
    name: {
        type: String,
        default: "No name"
    },
    primaryColor: {
        type: String,
        default: "Black"
    }
})
</script>

<template>
    <div class="card">
    <div class="card-header">
        {{name}}
    </div>
    <div class="card-body">
        <h5 class="card-title">Colors</h5>
        <p class="card-text">{{ primaryColor }}</p>
        <a href="#" class="btn btn-primary">Edit this item</a>
    </div>
    </div>
</template>