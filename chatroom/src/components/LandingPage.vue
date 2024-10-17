<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div>
        <header class="flex justify-between items-center  h-[80px] px-20 border-b-2">
            <img src="../../public/imgs/logo.png" width="200" alt="">
            <div class="flex justify-center items-center space-x-3"> 
                <RouterLink to="/login"> <button class="btn btn-ghost"> Log in </button> </RouterLink>
                <RouterLink to="/register"> <button class="btn btn-neutral"> Register </button> </RouterLink>
            </div>
        </header>
    </div>
</template>