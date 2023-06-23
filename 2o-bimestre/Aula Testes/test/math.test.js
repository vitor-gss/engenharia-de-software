const assert = require('assert');
const {soma} = require('../src/math')

describe('Math', () => {
    describe('soma()', () => {
        it('Deve retornar a soma de dois números', () => {
            assert.strictEqual(soma(2, 3), 5)
            assert.strictEqual(soma(-1, 5), 5)
            assert.strictEqual(soma(0, 0), 0)
        })
    })
})