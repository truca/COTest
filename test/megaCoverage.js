import 'babel-polyfill'

import { expect } from 'chai'
import MegaCoverage from '../src/products/megaCoverage'

describe("MegaCoverage", function() {
  describe("constructor", function() {
    it("should have 'Mega Coverage' as its name", function() {
      var fullCoverage = new MegaCoverage(10, 20)

      expect(fullCoverage.name).to.equal("Mega Coverage")
    });
  });
  
  describe("updatePrice", function() {
    it("should maintain its sellIn and price", function() {
      var megaCoverage = new MegaCoverage(10, 20)
      var state = megaCoverage.updatePrice()

      expect(state.sellIn).to.equal(10)
      expect(state.price).to.equal(20)
    });
  });

});