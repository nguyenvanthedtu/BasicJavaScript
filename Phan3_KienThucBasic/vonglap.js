/*--------- Vòng lặp - loop --------*/

var myArray=[
    'Javascript',
    'PHP',
    'Java',
    'Python',
    'C++'
];
//console.log(myArray.length -1 );
var arrayLength=myArray.length
for ( var i=0; i<arrayLength;i++){
    console.log(myArray[i])
}
console .log('======================================')
/*  Vòng lặp For / in   : Dùng để lấy các key cùa dối tượng*/
var myInfo= {
    name:'Thế',
    age: 21,
    address:'Hue,VN'
};
for (var key in myInfo){
    console.log(myInfo[key]);

}
console.log('\n')
for (var key in myArray){
    console.log(myArray[key]);
}
/*------------ Vòng lặp For / of: Dùng để lấy từng chữ cái của  chuỗi
hoặc dùng trong mảng  */
//var language='Javascript'
var myInfo1={
    name:'Thế',
    age: 21,
    address:'Hue,VN'
};
// vd trường hợp 1 : object: không thể sử dụng trong for / of
// VD  trường hợp 2:  object có thể sử dụng trong for / of , dùng Object.length.value
//console.log(Object.keys(myInfo1))

for (var value of Object.values(myInfo1)) {
    console.log(value);
}


/*------------ Vòng lặp while -------- */
console.log('==================')
var i=1
while(i < myArray.length) {
    console.log(myArray[i]);
    i++
}
// console.log('==============================')

// for(var i=0 ; i < myInfo.length ; i++) {
//     console.log(myInfo[i]);
// }
// console.log('----------------------')
// for(var  key in myInfo) {
//     console.log(myInfo[key]);
// }
// console.log('-------------------------------')
// for(var key of Object.values(myInfo)) {
//     console.log(key);
// }
// VD 
/*------------------ Vòng lặp do while */
//Vd: nhập mã  the cào 

var i = 0;
var isSuccess = true;

do{
    i++;
    if(isSuccess === false){
      console.log(`Nap sai lan thu ${i}`);
    } 
    else{
      console.log('Ma the cao hop le');
    }
}while(!isSuccess === true && i<= 3)


console.log('===========================')
// var i = 0;
// var chon = 0;

// function menu() {
//     console.log("1. nap thẻ");
//     console.log("2. mua thẻ")
//     console.log("3. bán thẻ")
//     console.log("0. thoát ");
// };

// do {
//     menu();
//     chon = prompt();
//     chon=parseInt(chon);
//     switch (chon) {
//         case 1:
//             alert("nap thẻ thành  công");
//             break;
//         case 2:
//             alert("mua thẻ thành  công");
//             break;
//         case 3:
//             alert("bán thẻ thành  công");
//             break;
//         default:
//             alert("hẹn Gặp Lại!!!");
//             chon=0;
//             break;
//     }
// } while (chon != 0);

///
console.log('==================')
for (var i=0 ;i< 10;i++){
    if(i % 2 !==0){
        continue
    }
    console .log(i)
}

/*------------ Vòng lặp lồng nhau  */