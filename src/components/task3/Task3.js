import { bind } from 'decko';

class PairGame {
    constructor(element) {
        this.field = element;
        this.sqs = element.getElementsByClassName('task3__sq');
        this.field.addEventListener('click', this.clickField);
        const colors = ['red', 'green', 'yellow', 'blue', 'orange', 'lime', 'purple', 'pink', 'red', 'green', 'yellow', 'blue', 'orange', 'lime', 'purple', 'pink'];
        for (let i = 0; i < 16; i += 1) {
            const random = Math.floor(Math.random() * (colors.length));
            const color = colors.splice(random, 1)[0];
            const colorDiv = this.sqs[i].querySelector('.task3__color');
            colorDiv.style.backgroundColor = color;
            colorDiv.style.display = 'none';
        }
        this.currentDiv = null;
        this.score = 0;
    }

    @bind
    clickField(e) {
        if (!e.target.classList.contains('task3__sq')) return;
        const colorDiv = e.target.querySelector('.task3__color');
        colorDiv.style.display = 'block';
        if (!this.currentDiv) {
            this.currentDiv = colorDiv;
            return;
        }
        if (this.currentDiv.style.backgroundColor !== colorDiv.style.backgroundColor) {
            setTimeout(() => {
                this.currentDiv.style.display = 'none';
                colorDiv.style.display = 'none';
                this.currentDiv = null;
            }, 300);
        } else {
            this.currentDiv = null;
            this.score += 2;
        }
    }
}

class Task3 {
    constructor(element) {
        this.timer = element.querySelector('.js-task3__timer');
        this.field = element.querySelector('.js-task3__field');
        this.btn = element.querySelector('.js-task3__submit');
        this.btn.addEventListener('click', this.startPairGame);
    }

    @bind
    startPairGame() {
        this.pairGame = new PairGame(this.field);
        let time = 0;
        this.interval = setInterval(() => {
            if (this.pairGame.score === 16) {
                clearInterval(this.interval);
                alert(`You win!\nElapsed time: ${this.timer.innerText}`);
            } else time += 50;
            this.timer.innerText = new Date(time).toISOString().substr(14, 9);
        }, 50);
    }
}

[].forEach.call(document.getElementsByClassName('task3'), element => new Task3(element));
