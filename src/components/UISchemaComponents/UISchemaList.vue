<script setup>
import {ref, onMounted} from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import router from '@/router';
import UISchemaCard from './UISchemaCard.vue';


// need to convert this to reactive because it will be taking in objects. 
const schemas = ref([]);
// const schemas = reactive([
// //     {
// //     Id: 0,
// //     Name: "",
// //     TextColorPrimary: "",
// //     TextColorSecondary: "",
// //     TextColorTertiary: "",
// //     setTextColorTertiaryLight: "",
// //     TextColorTertiaryDark: "",
// //     BackgroundColorPrimary: "",
// //     BackgroundColorSecondary: "",
// //     BackgroundColorTertiary: "",
// //     BackgroundColorTertiaryLight: "",
// //     BackgroundColorTertiaryDark: "",
// //     PrimaryFontFamily: "",
// //     SecondaryFontFamily: "",
// //     TertiaryFontFamily: ""
// // }
// ])

const navigateToDetail = () => {
          router.push('/schemadetail');
        };

onMounted(async () => {
    try{
        await axios.get('http://0.0.0.0:5001/api/uischema/', {
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
        <!-- <ul v-for="schema in schemas"> -->
            <!-- <div class="card">
                <div class="card-header">
                    {{schema.name}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Background Color Primary</h5>
                    <p class="card-text">{{ schema.backgroundColorPrimary }}</p>
                    <button @click="navigateToDetail()">View Schema</button>
                </div>
            </div> -->
        <ul>
            <UISchemaCard v-for="schema in schemas" :schema="schema"/>
        </ul>
    </section>
    
</template>