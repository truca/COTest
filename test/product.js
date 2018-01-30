import 'babel-polyfill'

import { expect } from 'chai'
import Product from '../src/products/product'

describe("Product", function() {
  describe("updatePrice", function() {
    it("should lower price and sellIn", function() {
      var product = new Product('Low Coverage', 10, 20)
      var state = product.updatePrice()

      expect(state.sellIn).to.equal(9)
      expect(state.price).to.equal(19)
    });
  
    it("shouldn't make price lower than 0", function() {
      var product = new Product('Low Coverage', 10, 0)
      var state = product.updatePrice()

      expect(state.price).to.equal(0)
    });
  
    it("shouldn't make sellIn lower than 0", function() {
      var product = new Product('Low Coverage', 0, 20)
      var state = product.updatePrice()

      expect(state.sellIn).to.equal(0)
    });
  
    it("should lower price twice as fast when sellIn is 0", function() {
      var product = new Product('Low Coverage', 0, 20)
      var state = product.updatePrice()

      expect(state.price).to.equal(18)
    });
  });

  describe("printState", function() {
    it("should print the state like this: 'name, sellIn, price'", function() {
      var product = new Product('Low Coverage', 10, 20)
      var stateString = product.printState()

      expect(stateString).to.equal(`Low Coverage, 10, 20`)
    });
  })

});