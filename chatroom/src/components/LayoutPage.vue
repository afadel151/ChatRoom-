<script setup>

</script>
<template>
    <div class="h-screen w-screen">
        <header class="h-[80px] bg-slate-500 w-full">
            iuvelib
        </header>
        
        <div class="flex w-full h-full">
            <div class="chatrooms w-[400px] h-full bg-green-300">
                Chatrooms
            </div>
            <div class="w-full h-full">
                <slot />
            </div>
        </div>
    </div>

</template>