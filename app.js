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
        // ex1
        ex1: './ex1.html',
        name: 'Ayrton',
        age: '24',
        imageLink: 'https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
        // ex2
        ex2: './ex2.html',
        value: '',
        value2: ''
    },
    methods: {
        welcome: function() {
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
        }
    }
})
