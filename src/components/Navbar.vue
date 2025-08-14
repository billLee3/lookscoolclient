<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Looks Cool</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-3">
                    <li class="nav-item mx-3">
                        <RouterLink to="/schemadetail" class="navlink">UI Schema Detail</RouterLink>
                    </li>
                    <li class="nav-item mx-3">
                        <RouterLink to="/register" class="navlink">Register user</RouterLink>
                    </li>
                    <li class="nav-item mx-3">
                        <RouterLink to="/login" class="navlink">Login user</RouterLink>
                    </li>
                    <li class="nav-item mx-3">
                        <RouterLink to="/profile" class="navlink">User profile</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>