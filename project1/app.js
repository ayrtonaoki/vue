new Vue({
    el: "#app",
    data: {
        playerHp: 100,
        enemyHp: 100,
        running: false,
        logs: []
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
            this.attackPower('enemyHp', 5, 10, special, 'Player', 'Enemy', 'good')
            if(this.enemyHp > 0) {
                this.attackPower('playerHp', 7, 12, false, 'Enemy', 'Player', 'bad')
            }
        },
        attackPower(character, min, max, special, source, target, type) {
            const plus = special ? 5 : 0
            const damage = this.getRandom(min + plus, max + plus)
            this[character] = Math.max(this[character] - damage, 0)
            this.logRegister(`${source} hitted ${target}! ${damage} damage dealt`, type)
        },
        heal() {
            this.healPower(10, 15)
            this.attackPower('playerHp', 7, 12, false)
        },
        healPower(min, max) {
            const heal = this.getRandom(min, max)
            this.playerHp = Math.min(this.playerHp + heal, 100)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        logRegister(text, type) {
            this.logs.unshift({text, type})
        }
    },
    watch: {
        hasResult(value) {
            if(value) this.running = false
        }
    }
})
