let a=5;
a=5+'5';
a="zaid"+2;
console.log(a,typeof a);

a="zaid"
console.log(a, typeof a)

a=true;
a=1+true;
console.log(a,typeof a)



let p = 25 - 'p';
p = Infinity;
p=5.4183
console.log(p,typeof p)
console.log(p.toFixed(2))
p=25;
console.log(p.toString(2))
p=5 + + '5';
console.log(p)

// Math methods

console.log(Math.sqrt(16))
console.log(Math.cbrt(27))
console.log(Math.abs(-10))
console.log(Math.max(5,6,3,5,8,9,6))
console.log(Math.min(2,9,3,5,6,2,1))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.round(5.9))
console.log(Math.round(5.4))
console.log(Math.round(Math.random() *10000))
console.log(Math.pow(2,3), 2**4)


// Strings

let q=`zaid`
console.log(q,typeof q)
q=25;
console.log(`the value of q is ${q}`)
let cost=4, tax=5, quantity=10
console.log(`The Total of buying ${quantity} apples with each cost ${cost} is ${quantity*cost} but also adds the tax of ${tax} is ${(tax/100)*(cost*quantity)}`)

// string methods

let str="zaId"
console.log(str.length)
console.log(str[0])
console.log(str[0]+str[1])
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.startsWith("za"))
console.log(str.endsWith("za"))