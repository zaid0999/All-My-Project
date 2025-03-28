let arr = [5, 4, 3, 2, 1];
arr[5] = 25;
console.log(arr[5])
console.log(arr.length)
arr[25] = 100;
console.log(arr.length) 

let x = [10, 20, 30];
x.push(40,50,60)
console.log(x)
x.pop();
console.log(x)
x.unshift(-10, -8, 0);
console.log(x)
x.shift()
console.log(x)
x.splice(4, 2)
console.log(x)
x.splice(2, 2, 101, 102, 103)
console.log(x)
x.splice(1, 0, 4, 5)
arr = [5, 4, 3, 2];
arr.reverse()
console.log(arr)
console.log(arr.indexOf(4))
console.log(arr.lastIndexOf(28))
console.log(arr.includes(28))


arr=["raj","prasad","toasti","shyam"]
arr.forEach(function (v, i) { console.log(v.length) })
arr = [1, 2, 3];
arr.forEach( (v, i) => console.log(v * v) );


let y = arr.forEach((v) => { return v * 2 });
console.log(y); 
let z = arr.map((v) => { return v * 2 });
console.log(z);
arr=[]

arr=["prasad","shekhar","john"]
let z1= arr.forEach(function (str)
{
    return str.charAt(0)
})
console.log(z1)
let z2 = arr.map(function (str) {
	return str.charAt(0)
})
console.log(z2) //[p,s,j]


let arr1 = [5, 4, 6, 7];
let x1=arr1.forEach(function (v,i)
{
    console.log(v); 
    return v%2==0;
})
console.log(x1);//undefined
let x2 = arr1.map(function (v, i) {
	console.log(v)
	return v % 2 == 0
})
console.log(x2) //[false,true,true,false]
let x3 = arr1.filter(function (v, i) {
	console.log(v)
	return v % 2 == 0
})
console.log(x3) //[4,6]
arr1=[5,15,4,7]
//some
let x4 = arr1.some((v,i) =>
{
    return v%2==0
})
console.log(x4)  //true -- atleast one retuned value should be true
let x5 = arr1.every((v, i) => {
	return v % 2 == 0
})
console.log(x5)  //false -- every returned value should be true
//sorting:
arr = [5, 4, 1, 6,16,44, 8,121,111111]
let res = arr.sort();
console.log(res)  //[1,11111,121,16,4,44,5,6,8]
console.log(arr.sort((a, b) => a - b)); [1,4,5,6,8,16,44,121,11111]
//Reduce
//reduce is used for accumulated logic
arr = [5, 4, 3, 1]
let res2 = arr.reduce((p, c) => p + c,0);
console.log(res2);
arr = [1, 2, 3, 4, 5]
let res3 = arr.reduce((p, c) => p * c, 1)
console.log(res3)



let obj = {
	name: "raj",
	age: 50,
	fun: function () {
		console.log(this.name)
	},
}
obj.fun()