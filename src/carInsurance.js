class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrices() {
    this.products.forEach(function(product) {
      product.updatePrice()
    });
    return this.products
  }
  printProducts(){
    var printResult = ""
    this.products.forEach(function(product) {
      printResult += product.printState()
    });
    return printResult
  }
  printedDay(i, printedProducts){
    return `Day ${i};name, sellIn, price;${printedProducts};`
  }
  after30Days() {
    var printResult = ""
    for (var i = 1; i <= 30; i++) {
      console.log(`Day ${i}`)
      console.log('name, sellIn, price')
      this.updatePrices()
      let printedProducts = this.printProducts()
      printResult += this.printedDay(i, printedProducts)
    }
    return printResult
  }
}

export default CarInsurance