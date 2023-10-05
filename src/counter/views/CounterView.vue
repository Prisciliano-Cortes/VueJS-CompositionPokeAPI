<script setup lang="ts">
    import { ref } from 'vue'

    const counter = ref(5)

    const increment = () => {
        counter.value++
    }
</script>

<template>
    <h1>Counter view: {{ counter }}</h1>

    <button @click="increment">+1</button>
</template>

<style scoped>

</style>