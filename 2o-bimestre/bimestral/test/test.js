const assert = require('assert');

const {
  CRUD
} = require('../src/crud'); // Importe as funções do programa CRUD

describe("CRUD", function () {
  describe("createItem()", function () {
    it("Adicionar um item na lista", function () {
      let c = new CRUD();
      c.createItem("Teste");
      assert.strictEqual(c.items.length, 1);
    });

    it("Adicionar 3 itens na lista", function () {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.items.length, 3);
    });
  });

  describe("readItems()", function () {
    it("Lê todos os itens da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.deepStrictEqual(c.readItems(), ["Item 1", "Item 2", "Item 3"]);
    });
  });

  describe("readItem()", () => {
    it("Lê o 1º item da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.readItem(0), "Item 1")


    });
    it("Lê o 2º item da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.readItem(1), "Item 2")
    })
    it("Lê o 3º item da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.readItem(2), "Item 3")
    })
  })

  describe("updateItem()", () => {
    it("Muda o primeiro item da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const foiModificado = c.updateItem(0, "Item Vitor")
      assert.strictEqual(foiModificado, true)
    });
    it("Muda o segundo item da lista", () => {
      let c = new CRUD();
      let index = 1
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const foiModificado = c.updateItem(1, "Item Vitor")
      assert.strictEqual(foiModificado, true)
    });
    it("Muda o terceiro item da lista", () => {
      let c = new CRUD();
      let index = 2
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const foiModificado = c.updateItem(2, "Item Vitor")
      assert.strictEqual(foiModificado, true)
    });
  })

  describe("deleteItem()", () => {
    it("Exclui o 1º item da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.deleteItem(0), true)
    })
    it("Exclui o 2º item da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.deleteItem(1), true)
    })
    it("Exclui o 3º item da lista", () => {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      const foiDeletado = c.deleteItem(2)
      assert.strictEqual(foiDeletado, true)
    })
  })
});