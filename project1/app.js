new Vue({
    el: "#app",
    data: {
        playerHp: 100,
        enemyHp: 100,
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
        attack(special) {
            this.attackPower('playerHp', 7, 12, special)
            this.attackPower('enemyHp', 7, 12, special)
        },
        attackPower(target, min, max, special) {
            const plus = special ? 5 : 0
            const damage = this.getRandom(min + plus, max + plus)
            this[target] = Math.max(this[target] - damage, 0)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch: {
        hasResult(value) {
            if(value) this.running = false
        }
    }
})
