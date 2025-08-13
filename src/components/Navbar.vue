<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <h1>NavBar Component</h1>
    <div>
        <RouterLink to="/schemadetail" >UI Schema Detail</RouterLink>
        <RouterLink to="/register" >Register user</RouterLink>
        <RouterLink to="/login" >Login user</RouterLink>
        <RouterLink to="/profile" >User profile</RouterLink>
    </div>
    
    
</template>