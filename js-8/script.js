
// 1
let str='Lorem ipsum dolor. uid amet consectetur adipisicing elit. Ab earum sit amet consectetur .sit amet consectetur adipisicing elit elit.'
let ket1=str.indexOf('.',0)   //20
let ket2=str.indexOf(".",ket1+1)
let res=str.slice(ket1,ket2)

// ktrel 1 in ketic minchev 2 kety bayc dinamic devov

// 2.
// let num="99.99.9,84"
// let x=num.slice(0,num.indexOf(','))
// let y=num.slice(num.indexOf(',')+1)
// ktrel tivyx i mej pahel minchev ,@ y i mej pahel , ic heto
// dyunamics devov


// 3. stexcum enq mutqi sxemaa
const login="admin123"
const psw='aA1234'
// ____________________________

let res=prompt("greq login").toLowerCase()===login.toLowerCase()&&prompt("greq psw")===psw




// let password=

// 1. Hamematel login ardyoq hamapataxanum e login te voch
// 2. loginy kap chuni ogtatery metsatar e grel te poqratar
// 3. erb loginy chisht lini nor stugi psw


// tnayin

//1. promptov mardy gri anun cankacac paragayum arajin tary sarqi poqratar miayn arajin tary
// HAMAYAK>hAMAYAK
// 2. nuyni verjin tary metsatar
// Muxi>> MuxI

// 3.prompt unaenaq stugum eq, թե արդյոք թիվը համապատասխանում է հետևյալ չափանիշներին.
// Թիվը դրական է։
// Թիվը զույգ է։
// Թիվը բաժանվում է 3-ի

// promptum gres faringeyti tivy veradarcni C astichan taki orinaky matematikakan grvacq e
// (°F - 32) * 5/9 = °C
//
//// promptum gres celsus tivy veradarcni F astichan taki orinaky matematikakan grvacq e
// (°C * 9/5) + 32 = °F