import { bind } from 'decko';

class Task2 {
    constructor(element) {
        this.start = element.querySelector('.js-task2__start-position');
        this.start.addEventListener('keyup', this.checkInput);
        this.btn = element.querySelector('.js-task2__submit');
        this.btn.addEventListener('click', this.showResult);
        this.reg = new RegExp('^[a-hA-H]{1}[1-8]{1}$');
    }

    @bind
    getMoves() {
        const boardCols = 'ABCDEFGH';
        const boardRows = '12345678';
        const moves = [[-1, -2], [-2, -1], [-2, 1], [1, -2], [-1, 2], [2, -1], [1, 2], [2, 1]];
        const result = [];
        const col = boardCols.indexOf(this.start.value.slice(0, 1).toUpperCase());
        const row = boardRows.indexOf(this.start.value.slice(1, 2));
        moves.forEach((move) => {
            const newCol = move[0] + col;
            const newRow = move[1] + row;
            if (newCol > -1 && newCol < 8 && newRow > -1 && newRow < 8) {
                result.push(boardCols.charAt(newCol) + boardRows.charAt(newRow));
            }
        });
        return result.join(' ');
    }

    @bind
    showResult() {
        const result = this.getMoves();
        alert(`Possible moves to:\n${result}`);
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
