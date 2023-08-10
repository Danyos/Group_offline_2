//
// let text = "1122"
// if(text[0]==='-'){
//     text*=-1
//     text=""+text
// }
// console.log(text.length)

// let name="Narek"
// let res=""
//
// for(let i=name.length-1;i>=0;i--){
//     if (i===name.length-1){
//         res+=name[i].toUpperCase()
//         continue
//     }
//     res+=name[i].toLowerCase()
// }
// console.log(res)
// let x=10
// let y=30
// for (let i=0; i<=x;i++){
//     for (let j=0; j<=y;j++){
//         if(i===0 || i===x){
//             document.write("*")
//         }else{
//             if(j===0 || j===y){
//                 document.write("*")
//             }else{
//                 document.write("&nbsp;&nbsp;")
//             }
//         }
//
//     }
//
//     document.write('<br>')
// }




// for(let i = 2; i<=10; i++){
//     for(let j = 1; j <= 10; j++){
//
//         console.log(`${i} x ${j} = ` + i*j);
//     }
//
// }



// ____________Georga__________________

//
// for (let i = 1; i < 6; i++){
//     let res = '';
//     for(let j = 1; j <= i; j++){
//         res = res + i;
//     }
//     console.log(res);
// }

// --------------------------------------
//
//

// for(let i = 0; i < 6; i++){

//     let star = '';

//     for (let j = 6; j > i; j--){

//         star += '*';
//     }
//     console.log(star);
// }
//

// ---------------------------------------
//
// let star = '';
//
// for(let i = 0; i < 6; i++){
//     let space = '';
//     for(let j = 6; j > i; j--){
//         space += ' ';
//     }
//     console.log(space + star);
//     star += '*';
// }
//
// // ----------------------------------------
// let star = '*';
//
// for (let i = 0; i < 5; i++){
//     let space = '';
//     for (let j = 5; j > i; j--){
//          space += ' ';
//     }
//     console.log(space + star);
//     star += '**'
// }
//




// let n = 7;
//
// for (let i = 3; i <= n; i++) {
//
//     let spaces = " ".repeat(n - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(spaces + stars);
// }
//


// 1,2,3,5,7,11,13,17,19

// debugger
// for (let i=1;i<100;i++){
//     let res=true;
//     for (let j=2;j<i;j++){
//         if(i%j===0){
//             res=false
//             break
//         }
//     }
//     if(res){
//         console.log(i)
//     }
// }


loop:for (let i=1;i<100;i++){
    let res=true;
    for (let j=2;j<i;j++){
        if(i%j===0){
            continue loop
        }
    }

    console.log(i)

}