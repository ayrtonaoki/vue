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
            this.logs = []
        },
        attack(special) {
            this.attackPower('enemyHp', 5, 10, special, 'Player', 'good')
            if(this.enemyHp > 0) {
                this.attackPower('playerHp', 7, 12, false, 'Enemy', 'bad')
            }
        },
        attackPower(character, min, max, special, source, type) {
            const plus = special ? 5 : 0
            const damage = this.getRandom(min + plus, max + plus)
            this[character] = Math.max(this[character] - damage, 0)
            this.logRegister(`${source}: ${damage} damage`, type)
            return damage
        },
        heal() {
            heal = this.healPower(10, 15)
            damage = this.attackPower('playerHp', 7, 12, false, 'ENEMY', 'bad')
            this.logRegister(`Player: ${heal} heal (Real heal: ${heal - damage})`, 'good')
        },
        healPower(min, max) {
            const heal = this.getRandom(min, max)
            this.playerHp = Math.min(this.playerHp + heal, 100)
            return heal
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
        },
        logs() {
            if(this.logs.length > 2) this.logs.pop()
        }
    }
})
