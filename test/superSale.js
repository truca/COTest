import 'babel-polyfill'

import { expect } from 'chai'
import SuperSale from '../src/products/superSale'

describe("SuperSale", function() {
  describe("constructor", function() {
    it("should have 'Super Sale' as its name", function() {
      var superSale = new SuperSale(10, 20)

      expect(superSale.name).to.equal("Super Sale")
    });
  });
  
  describe("updatePrice", function() {
    it("should decrease its price by 2 and decrease its sellIn by one", function() {
      var superSale = new SuperSale(10, 20)
      var state = superSale.updatePrice()

      expect(state.sellIn).to.equal(9)
      expect(state.price).to.equal(18)
    });

    it("shouldn't decrease its price below 0", function() {
      var superSale = new SuperSale(10, 1)
      var state = superSale.updatePrice()

      expect(state.price).to.equal(0)
    });
  });

});