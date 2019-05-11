import { bind } from 'decko';
import KnightMoves from '../knight/KnightMoves';

class Task2 {
    constructor(element) {
        this.start = element.querySelector('.js-task2__start-position');
        this.start.addEventListener('keyup', this.checkInput);
        this.btn = element.querySelector('.js-task2__submit');
        this.btn.addEventListener('click', this.showResult);
        this.reg = new RegExp('^[a-hA-H]{1}[1-8]{1}$');
    }

    @bind
    showResult() {
        const result = new KnightMoves(this.start.value);
        alert(`Possible moves to:\n${result.join(' ')}`);
    }

    @bind
    checkInput(event) {
        if (this.reg.test(event.target.value)) {
            event.target.classList.remove('error');
            this.btn.disabled = false;
        } else {
            event.target.classList.add('error');
            this.btn.disabled = true;
        }
        if (event.keyCode === 13 && !this.btn.disabled) this.showResult();
    }
}

[].forEach.call(document.getElementsByClassName('task2'), element => new Task2(element));
