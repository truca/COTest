import Product from './product'

class SuperSale extends Product {
  constructor(sellIn, price){
    super("Super Sale", sellIn, price)
  }
  updatePrice(){
    super.updatePrice()
    if(this.price > 0) this.price -= 1
    return this
  }
}

export default SuperSale