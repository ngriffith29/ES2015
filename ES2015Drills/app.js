let favMovie = (movie = "The Room", name = 'world') =>  console.log(`My name is ${name} and my favorite movie is ${movie}`)


favMovie()


let getName = (firstName) => firstName.split(" ", 1)

let nameResult = getName("Nathan Griffith")
console.log(nameResult)

let exp = (num1, num2) => {
    let exponent = (Math.pow(num1,2));
    let product = num1*num2
    return { exponent, product }
}

let exponentLog = exp(3,4)

console.log(exponentLog.exponent)
console.log(exponentLog.product)

let arr = ["Paul", "Birmingham", "Kimchi"];
let info = (Name,location,food) => {

    console.log(Name,location,food)    

}
info(...arr)


let createFunc = paramater => {
    let changeStr = [...paramater]
    for (let i=0; i<paramater.length; i++){
        console.log(changeStr[i])
    }
}

createFunc("helo")