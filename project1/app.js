new Vue({
    el: "#app",
    data: {
        playerHp: 100,
        enemyHp: 0,
        running: false
    },
    computed: {
        hasResult() {
            return this.playerHp == 0 || this.enemyHp == 0
        }
    },
    methods: {
        start() {
            this.running = true
            this.playerHp = 100
            this.enemyHp = 100
        },
    },
    watch: {

    }
})
