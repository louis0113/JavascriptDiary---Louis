

function floatOrInteger (verify){

  if (isFloat(verify)){
  
  console.log(`${verify} is a Float Number`)
  
} else {
  console.log(`${verify} is a Integer Number`)
}
  
}

let x = 10 // Integer
console.log(`${x}`)

x = 20
console.log(`${x} is a ${typeof(x)}`) //A number includes Integer Numbers and Float Numbers

floatOrInteger(x)

let hello = "Hello World!" //String
console.log(`${hello} is a ${typeof(hello)}`)

let powerOn = true // Bool 
console.log(`${powerOn} is a ${typeof(powerOn)}`)

let powerOff = !powerOn 
console.log(`${powerOff} is a ${typeof(powerOff)}`)

let y = 10.5 //Float

console.log(`${y} is a ${typeof(y)}`)

floatOrInteger(y)

