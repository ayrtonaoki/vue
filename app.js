new Vue({
    el: '#app',
    data: {
        template: './template.html',
        title: 'App test',
        htmlTag: '<p>HTML tag example</p>',
        counter: 0,
        counterBy: 0,
        x: 0,
        y: 0,
        twoWayBindExample: 'Two way data bind example',
        twoWayBindExample2: 'Two way data bind example with v-model',
        applyColor2: false,
        divClass: 'color1',
        divClass2: 'rotate',
        color: 'yellow',
        width: 100,
        height: 100,
        user: 'Ayrton',
        logged: false,
        anonymous: false,
        user2: 'Ayrton',
        logged2: false,
        anonymous2: false,
        user3: 'Ayrton',
        logged3: false,
        anonymous3: false,
        persons: [
            { name: 'Ayrton', age: 24, gender: 'Male' },
            { name: 'Jeovana', age: 26, gender: 'Female' },
            { name: 'Gustavo', age: 25, gender: 'Male' }
        ],
        colors: ['red', 'green', 'blue', 'yellow'],
        // ex1
        ex1: './ex1.html',
        name: 'Ayrton',
        age: '24',
        imageLink: 'https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
        // ex2
        ex2: './ex2.html',
        value: '',
        value2: '',
        computeCounter: 0,
        computeCounter2: 0,
        // ex3
        ex3: './ex3.html',
        valueEx3: 0,
        // ex4
        ex4: './ex4.html',
        class1: 'mark',
        danger: true,
        class3: '',
        class4: '',
        color5: '',
        style5: {
            width: '100px',
            height: '100px'
        },
        width: '0',
        // ex5
        ex5: './ex5.html'
    },
    computed: {
        resultComputeCounter() {
            return this.computeCounter >= 5 ? 'Greater than or equal 5' : 'Less than 5'
        },
        style() {
            return {
                color2: this.applyColor2,
                color3: !this.applyColor2
            }
        },
        myStyle() {
            return {
                backgroundColor: this.color,
                width: this.width,
                height: this.height
            }
        },
        // ex3
        resultEx3() {
            return this.valueEx3 === 37 ? 'Same value' : 'Different value'
        }
    },
    watch: {
        counter(older, newer) {
            setTimeout(() => {
                this.counter = 0
            }, 5000)
        },
        // ex3
        resultEx3() {
            setTimeout(() => {
                this.valueEx3  = 0
            }, 5000)
        }
    },
    methods: {
        welcome: function() {
            console.log('teste')
            return 'Welcome!'
        },
        instance: function() {
            return this.title
        },
        sum() {
            this.counter ++
        },
        sumBy(number, event) {
            this.counterBy += number
            console.log('Event: ' + event)
        },
        mouseMove(event) {
            this.x = event.clientX
            this.y = event.clientY
        },
        stopMouseMove(event) {
            event.stopPropagation()
        },
        keyupAlert() {
            alert('Enter pressed')
        },
        computeExample() {
            computeCounter ++
        },
        computeExample2() {
            computeCounter2 += 2
        },
        // ex1
        doubledAge: function() {
            return this.age * 2
        },

        randomNumber: function() {
            return Math.random()
        },
        // ex2
        alertClick() {
            alert('Click')
        },
        getKeyValue(event) {
            this.value = event.target.value
        },
        //ex4
        iniciarEfeito() {
            setInterval(() => {
                this.class1 = this.class1 == 'mark' ? 'shrink' : ' mark'
            }, 1000)
		},
		iniciarProgresso() {

        },
        setDanger(event) {
            if(event.target.value == 'true') {
                this.danger.true
            } else if (event.target.value == 'false') {
                this.danger = false
            }
        },
        loadProgressBar () {
            let value = 0
            const temp = setInterval(() => {
                value += 5
                this.width = `${value}%`
                console.log(this.width)
                if(value == 100) clearInterval(temp)
            }, 50)
        }
    }
})
