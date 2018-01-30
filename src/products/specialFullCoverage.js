import FullCoverage from './fullCoverage'

class SpecialFullCoverage extends FullCoverage {
  constructor(sellIn, price){
    super(sellIn, price, "Special ")
  }
  updatePrice(){
    super.updatePrice()
    if(this.sellIn < 11 && this.price < 50) this.price += 1
    if(this.sellIn < 6 && this.price < 50) this.price += 1

    return this
  }
}

export default SpecialFullCoverage