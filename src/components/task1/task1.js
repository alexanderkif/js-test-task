import { bind } from 'decko';
import { isNumber } from 'util';

class Task1 {
    constructor(element) {
        this.number1 = element.querySelector('.js-task1__number1');
        this.number1.addEventListener("keyup", this.checkInput);
        this.number2 = element.querySelector('.js-task1__number2');
        this.number2.addEventListener("keyup", this.checkInput);
        this.btn = element.querySelector('.js-task1__submit');
        this.btn.addEventListener("click", this.summ);
    }

    @bind
    summ() {
        alert('Result:\n' + (+this.number1.value + +this.number2.value));
    }

    @bind
    checkInput(event) {
        if(isNaN(event.target.value)) {
            event.target.classList.add('error');
            this.btn.disabled = true;
        }
        else event.target.classList.remove('error');

        if(isNaN(this.number1.value) || isNaN(this.number2.value))
            this.btn.disabled = true;
        else
            this.btn.disabled = false;
    }
}

[].forEach.call(document.getElementsByClassName('task1'), element => {
    new Task1(element);
});
