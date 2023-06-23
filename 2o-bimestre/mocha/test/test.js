const assert = require("assert");
// const { soma, sub, mult, div } = require("../src/math");
const {CRUD} = require('../test/tests')

describe("Math", function () {
    describe("Soma()", function () {
        it("Deve retornar  a soma de dois números", function () {
            assert.strictEqual(soma(2, 3), 5);
            assert.strictEqual(soma(-1, 5), 4);
            assert.strictEqual(soma(0, 0), 0);
            assert.strictEqual(soma(-1, -3), -4);
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
        it("Deve retornar a div de dois números", () => {
            assert.strictEqual(div(5, 0), Infinity)
        })
        it("Deve retornar a div de dois números", () => {
            assert.strictEqual(div(2, 2), 1)
        })
    })
    describe("CRUD", () => {
        describe("CreateItem", () => {
            it("Adicionar um item na lista", () => {
                let c = new CRUD()
                c.createItem("Item 1")
                c.createItem("Item 2")
                c.createItem("Item 3")
                assert.strictEqual(c.items.length, 1)
            })
        })
    })
});