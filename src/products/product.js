class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
  updatePrice(){
    if(this.price > 0){
      if(this.sellIn > 0) this.price -= 1
      else {
        if(this.price >= 2) this.price -= 2
        else this.price = 0
      }
    }
    if(this.sellIn > 0) this.sellIn -= 1
    return this
  }
  printState(){
    var printString = `${this.name}, ${this.sellIn}, ${this.price}`
    console.log(printString)
    return printString
  }
}

export default Product