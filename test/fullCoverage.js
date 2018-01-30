import 'babel-polyfill'

import { expect } from 'chai'
import FullCoverage from '../src/products/fullCoverage'

describe("FullCoverage", function() {
  describe("constructor", function() {
    it("should have 'Full Coverage' as its name", function() {
      var fullCoverage = new FullCoverage(10, 20)

      expect(fullCoverage.name).to.equal("Full Coverage")
    });
  });
  
  describe("updatePrice", function() {
    it("should increase the price and lower sellIn", function() {
      var fullCoverage = new FullCoverage(10, 20)
      var state = fullCoverage.updatePrice()

      expect(state.sellIn).to.equal(9)
      expect(state.price).to.equal(21)
    });
  
    it("shouldn't make price higher than 50", function() {
      var fullCoverage = new FullCoverage(10, 50)
      var state = fullCoverage.updatePrice()

      expect(state.price).to.equal(50)
    });
  });

});