<template>
    <div id="counters">
        <app-counter />
        <h1>Counters</h1>
    </div>
</template>

<script>

import Counter from './Counter.vue'

export default {
    components: {
        'app-counter': Counter
    }
}
</script>

<style>

</style>
