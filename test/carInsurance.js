import 'babel-polyfill'

import { expect } from 'chai'
import CarInsurance from '../src/carInsurance'
import Product from '../src/products/product'

describe("CarInsurance", function() {
  
  describe("updatePrices", function() {
    it("should return all the products", function() {
      var carInsurance = new CarInsurance([
        new Product('Low Coverage', 10, 20),
        new Product('Low Coverage', 20, 30)
      ])
      let products = carInsurance.updatePrices()

      expect(products.length).to.equal(2)
      expect(products[0] instanceof Product).to.equal(true)
      expect(products[1] instanceof Product).to.equal(true)
    });

    it("should be applied to all the products", function() {
      var carInsurance = new CarInsurance([
        new Product('Low Coverage', 10, 20),
        new Product('Low Coverage', 20, 30)
      ])
      let products = carInsurance.updatePrices()

      expect(products[0].sellIn).to.equal(9)
      expect(products[0].price).to.equal(19)
      expect(products[1].sellIn).to.equal(19)
      expect(products[1].price).to.equal(29)
    });
  })

  describe("printProducts", function() {
    it("should print all the products", function() {
      var carInsurance = new CarInsurance([
        new Product('Low Coverage', 10, 20),
        new Product('Low Coverage', 20, 30)
      ])
      var printedProducts = carInsurance.printProducts()

      expect(printedProducts).to.equal("Low Coverage, 10, 20Low Coverage, 20, 30")
    })
  })

  describe("after30Days", function() {
    var write, log, output = '';
    var cleanup = function() {
      console.log = log;
    };

    beforeEach(function() {
      log = console.log;
      console.log = function(s) { output += s; };
    });

    afterEach(cleanup);

    it("should print all the products for everyday", function() {
      var carInsurance = new CarInsurance([
        new Product('Low Coverage', 10, 20),
        new Product('Low Coverage', 20, 30)
      ])
      var printedResult = carInsurance.after30Days()

      expect(printedResult).to.equal("Day 1;name, sellIn, price;Low Coverage, 9, 19Low Coverage, 19, 29;Day 2;name, sellIn, price;Low Coverage, 8, 18Low Coverage, 18, 28;Day 3;name, sellIn, price;Low Coverage, 7, 17Low Coverage, 17, 27;Day 4;name, sellIn, price;Low Coverage, 6, 16Low Coverage, 16, 26;Day 5;name, sellIn, price;Low Coverage, 5, 15Low Coverage, 15, 25;Day 6;name, sellIn, price;Low Coverage, 4, 14Low Coverage, 14, 24;Day 7;name, sellIn, price;Low Coverage, 3, 13Low Coverage, 13, 23;Day 8;name, sellIn, price;Low Coverage, 2, 12Low Coverage, 12, 22;Day 9;name, sellIn, price;Low Coverage, 1, 11Low Coverage, 11, 21;Day 10;name, sellIn, price;Low Coverage, 0, 10Low Coverage, 10, 20;Day 11;name, sellIn, price;Low Coverage, 0, 8Low Coverage, 9, 19;Day 12;name, sellIn, price;Low Coverage, 0, 6Low Coverage, 8, 18;Day 13;name, sellIn, price;Low Coverage, 0, 4Low Coverage, 7, 17;Day 14;name, sellIn, price;Low Coverage, 0, 2Low Coverage, 6, 16;Day 15;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 5, 15;Day 16;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 4, 14;Day 17;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 3, 13;Day 18;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 2, 12;Day 19;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 1, 11;Day 20;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 10;Day 21;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 8;Day 22;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 6;Day 23;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 4;Day 24;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 2;Day 25;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 0;Day 26;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 0;Day 27;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 0;Day 28;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 0;Day 29;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 0;Day 30;name, sellIn, price;Low Coverage, 0, 0Low Coverage, 0, 0;")
    })
  })

});