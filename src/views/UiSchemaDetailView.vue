<script setup>
import CanvasAppModel from '@/components/PowerAppLayoutComponents/CanvasAppLayoutComponents/CanvasAppModel.vue';
import UISchemaForm from '@/components/UISchemaComponents/UISchemaForm.vue';

</script>

<template>
    <div class="container text-center p-3">
        <div class="row justify-content-between align-items-center">
            <div class="col-6">
                <UISchemaForm />
            </div>
            <div class="col-3">
                <CanvasAppModel />
            </div>
        </div>
    </div>
</template>