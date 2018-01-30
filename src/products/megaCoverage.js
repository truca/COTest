import Product from './product'

class MegaCoverage extends Product {
  constructor(sellIn, price){
    super(`Mega Coverage`, sellIn, price)
  }
  updatePrice(){
    return this
  }
}

export default MegaCoverage