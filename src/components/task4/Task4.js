import { bind } from 'decko';
import KnightMoves from '../knight/KnightMoves';

class Task4 {
    constructor(element) {
        this.field = element.querySelector('.js-task4__field');
        this.field.addEventListener('click', this.showMoves);
        this.sqs = element.querySelectorAll('.task4__sq');
    }

    // eslint-disable-next-line class-methods-use-this
    getSqValue(sq) {
        return sq.classList.value.split('js-task4__sq-')[1].slice(0, 2);
    }

    @bind
    showMoves(e) {
        if (!e.target.classList.contains('task4__sq')) return;
        if (this.currentSq) {
            this.currentSq.classList.remove('task4__sq_current');
        }
        this.currentSq = e.target;
        this.currentSq.classList.add('task4__sq_current');
        this.start = this.getSqValue(e.target);
        this.moves = new KnightMoves(this.start);
        this.sqs.forEach((sq) => {
            if (this.moves.includes(this.getSqValue(sq))) {
                sq.classList.add('task4__sq_possible');
            } else {
                sq.classList.remove('task4__sq_possible');
            }
        });
    }
}

[].forEach.call(document.getElementsByClassName('task4'), element => new Task4(element));
