/* eslint-disable no-undef */

import KnightMoves from '../../../src/components/knight/KnightMoves';

const assert = require('assert');

describe('KnightMoves tests', () => {
    it('check move D4', () => {
        const knightMoves = new KnightMoves('D4');
        assert.equal(knightMoves.join(), ['C2', 'B3', 'B5', 'E2', 'C6', 'F3', 'E6', 'F5'].join());
    });
    it('check move A1', () => {
        const knightMoves = new KnightMoves('A1');
        assert.equal(knightMoves.join(), ['B3', 'C2'].join());
    });
});
