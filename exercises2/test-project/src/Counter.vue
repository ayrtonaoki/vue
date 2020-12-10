<template>
    <div id="app">
        <span> {{ counter }} </span>
        <button @click="sum">+</button>
        <button @click="subtract">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        sum() {
            this.counter++
        },
        subtract() {
            this.counter--
        }
    }
}
</script>

<style>

</style>
