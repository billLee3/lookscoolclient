<script setup>
    import { reactive } from 'vue';
    import axios from 'axios';
    import { useToast } from 'vue-toastification';

    const form = reactive({
        grant_type: '',
        username: '',
        password: '',
        scope: '',
        client_id: '',
        client_secret: ''
    })
    
    const toast = useToast()

    const handleSubmit = async () => {
        const newLogin = {
            grant_type: form.grant_type,
            username: form.username,
            password: form.password,
            scope: form.scope,
            client_id: form.client_id,
            client_secret: form.client_secret
        }

        try{
            const request = await axios.post('http://0.0.0.0:8000/auth/token', newLogin);
            toast.success("User successfully logged in")
        }catch(error){
            toast.error("User was unable to sign in. ")
        }
    }
</script>

<template>
    <div class="container-md p-2">
        <h3>Login</h3>
        <form class="mt-2" @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.username">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>