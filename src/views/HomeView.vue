<script setup>
import UISchemaList from '@/components/UISchemaComponents/UISchemaList.vue';
import router from '@/router';
const navigateToDetail = () => {
          router.push('/schemadetail');
        };
</script>

<template>
    <UISchemaList />
    <div class="container justify-content-center align-items-center">
        <div class="row justify-content-center align-items-center">
            <div class="col-3 justify-content-center align-items-center">
                <button @click="navigateToDetail()" type="button" class="btn btn-dark">Add UI Schema</button>
            </div>
        </div>
    </div>
</template>