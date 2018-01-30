import CarInsurance from './carInsurance'
import { Product } from './products'

var carInsurance = new CarInsurance([
  new Product('Low Coverage', 10, 20),
  new Product('Low Coverage', 20, 30)
])

carInsurance.after30Days()

