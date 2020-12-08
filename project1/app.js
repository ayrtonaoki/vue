new Vue({
    el: "#app",
    data: {
        playerHp: 100,
        enemyHp: 100
    },
    computed: {
        hasResult() {
            return this.playerHp == 0 || this.enemyHp == 0
        }
    },
    methods: {

    },
    watch: {

    }
})
