
function floatOrInteger (verify){

    let integer =  Number.isInteger(verify)

integer ? console.log(`${verify} is a Integer Number \n`) : console.log(`${verify} is a Float Number `)
  
}

function typeOff (a){
    console.log(`${a} is a ${typeof(a)}\n`)
}

let x = 10 // Integer

typeOff(x)

x = 20
typeOff(x) //A number includes Integer Numbers and Float Numbers

floatOrInteger(x)

let hello = "Hello World!" //String
let powerOn = true // Bool = true
let powerOff = !powerOn //Bool = false
let y = 10.5 //Float

typeOff(hello)
typeOff(powerOn)
typeOff(powerOff)
typeOff(y)
floatOrInteger(y)

