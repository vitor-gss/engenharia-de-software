const assert = require("assert");
const { soma, sub, mult, div } = require("../src/math");

describe("Math", function () {
    describe("Soma()", function () {
        it("Deve retornar  a soma de dois números", function () {
            assert.strictEqual(soma(2, 3), 5);
            assert.strictEqual(soma(-1, 5), 4);
            assert.strictEqual(soma(0, 0), 0);
        });
    })
    describe("Sub()", () => {
        it("Deve retornar a sub de dois números", () => {
            assert.strictEqual(sub(5, 3), 2)
            assert.strictEqual(sub(8, 7), 1)
            assert.strictEqual(sub(2, 3), -1)
        })
    })
    describe("mult()", () => {
        it("Deve retornar a mult de dois números", () => {
            assert.strictEqual(mult(5, 3), 15)
            assert.strictEqual(mult(8, 7), 56)
            assert.strictEqual(mult(2, 3), 6)
        })
    })
    describe("div()", () => {
        it("Deve retornar a div de dois números", () => {
            assert.strictEqual(div(6, 3), 2)
            assert.strictEqual(div(8, 2), 4)
            assert.strictEqual(div(3, 3), 1)
        })
    })
});