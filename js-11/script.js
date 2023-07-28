// let x = "Garik"
// let res = ""
//
// for (let i = x.length - 1; i >= 0; i--) {
//     if(x.length-1===i){
//         res += x[i].toUpperCase()
//     }else{
//         res += x[i].toLowerCase()
//     }
//
//
// }
// console.log(res)
//
//
// let xy="7,18"
//     // ...
// let x=7
// let y=8





let num=prompt("greq")

let x=+num.slice(0, num.indexOf(","))//3
let y=+num.slice(num.indexOf(",")+1)//4

if (x<y) {
    x=x+y//7
    y=x-y//3
    x=x-y //4
}
let res=1
for (let i= y; i<=x; i++) {
   res*=i

}
console.log(res)