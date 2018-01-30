import Product from './product'

class FullCoverage extends Product {
  constructor(sellIn, price, prefix = ""){
    super(`${prefix}Full Coverage`, sellIn, price)
  }
  updatePrice(){
    if(this.price < 50){
      this.price += 1
    }
    if(this.sellIn > 0) this.sellIn -= 1
    return this
  }
}

export default FullCoverage