import CarInsurance from './carInsurance'
import { Product, FullCoverage, SpecialFullCoverage, MegaCoverage, SuperSale } from './products'

var carInsurance = new CarInsurance([
  new Product('Low Coverage', 10, 20),
  new FullCoverage(20, 30),
  new SpecialFullCoverage(10, 20),
  new MegaCoverage(0, 200),
  new SuperSale(20, 200),
])

carInsurance.after30Days()

