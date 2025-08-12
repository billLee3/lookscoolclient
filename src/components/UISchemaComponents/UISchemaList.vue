<script setup>
import {ref, onMounted} from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios'

const schemas = ref([]);

onMounted(async () => {
    try{
        const response = await axios.get('http://0.0.0.0:8000/');
        schemas.value = response.value;
    }catch(error){
        console.error("Error fetching schemas", error);
    }
})
</script>

<template>
    <div>UiSchema List Component</div>
</template>