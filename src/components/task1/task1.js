import { bind } from 'decko';

class Task1 {
    constructor(element) {
        this.number1 = element.querySelector('.js-task1__number1');
        this.number1.addEventListener('keyup', this.checkInput);
        this.number2 = element.querySelector('.js-task1__number2');
        this.number2.addEventListener('keyup', this.checkInput);
        this.btn = element.querySelector('.js-task1__submit');
        this.btn.addEventListener('click', this.summ);
    }

    @bind
    summ() {
        const result = +(+this.number1.value + +this.number2.value).toFixed(10);
        // eslint-disable-next-line no-alert
        alert(`Result:\n${result}`);
    }

    @bind
    checkInput(event) {
        // eslint-disable-next-line no-restricted-globals
        if (event.target.value === '' || isNaN(event.target.value)) {
            event.target.classList.add('error');
            this.btn.disabled = true;
        } else {
            event.target.classList.remove('error');
        }

        if (this.number1.classList.contains('error')
            || this.number2.classList.contains('error')) {
            this.btn.disabled = true;
        } else {
            this.btn.disabled = false;
        }

        if (event.keyCode === 13 && !this.btn.disabled) this.summ();
    }
}

[].forEach.call(document.getElementsByClassName('task1'), element => new Task1(element));
