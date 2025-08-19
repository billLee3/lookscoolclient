<script setup>
import {ref, onMounted} from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';


const schemas = ref([]);


onMounted(async () => {
    try{
        await axios.get('http://0.0.0.0:8000/schema/', {
            headers: {
                Authoriztion: `Bearer ${jwtToken}`
            }
        }).then(response => {
            schemas.value = response.data;
        });
        
    }catch(error){
        console.error("Error fetching schemas", error);
    }
})
</script>

<template>
    <section class="container-lg p-3">
        <div>UiSchemas</div>
        <ul>
            <li v-for="schema in schemas">
                {{ schema }}
            </li>
        </ul>
    </section>
    
</template>