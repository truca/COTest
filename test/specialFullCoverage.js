import 'babel-polyfill'

import { expect } from 'chai'
import SpecialFullCoverage from '../src/products/specialFullCoverage'

describe("SpecialFullCoverage", function() {
  describe("constructor", function() {
    it("should have 'Special Full Coverage' as its name", function() {
      var specialFullCoverage = new SpecialFullCoverage(10, 20)

      expect(specialFullCoverage.name).to.equal("Special Full Coverage")
    });
  });
  
  describe("updatePrice", function() {
    it("should increase the price and lower sellIn", function() {
      var specialFullCoverage = new SpecialFullCoverage(20, 20)
      var state = specialFullCoverage.updatePrice()

      expect(state.sellIn).to.equal(19)
      expect(state.price).to.equal(21)
    });

    it("should increase the price by two if sellIn is lower or equal than 10", function() {
      var specialFullCoverage = new SpecialFullCoverage(10, 20)
      var state = specialFullCoverage.updatePrice()

      expect(state.sellIn).to.equal(9)
      expect(state.price).to.equal(22)
    });
  
    it("should increase the price by three if sellIn is lower or equal than 5", function() {
      var specialFullCoverage = new SpecialFullCoverage(5, 20)
      var state = specialFullCoverage.updatePrice()

      expect(state.sellIn).to.equal(4)
      expect(state.price).to.equal(23)
    });

    it("shouldn't make price higher than 50", function() {
      var specialFullCoverage = new SpecialFullCoverage(20, 50)
      var state = specialFullCoverage.updatePrice()

      expect(state.price).to.equal(50)
    });

    it("shouldn't make price higher than 50 if sellIn is lower or equal than 10", function() {
      var specialFullCoverage = new SpecialFullCoverage(10, 50)
      var state = specialFullCoverage.updatePrice()

      expect(state.price).to.equal(50)
    });

    it("shouldn't make price higher than 50 if sellIn is lower or equal than 5", function() {
      var specialFullCoverage = new SpecialFullCoverage(5, 50)
      var state = specialFullCoverage.updatePrice()

      expect(state.price).to.equal(50)
    });

  });
});