// @ts-ignore
import { isNil } from 'ramda'



const isNill = (value: any) => isNil(value) || value == '0'


function print(value: any) {
  return isNill(value) ? console.log("nill value") : console.log("not nill")
}



print(0)
print("hello")
