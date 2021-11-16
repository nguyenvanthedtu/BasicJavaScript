//include method
// TH1:  Kt chuỗi
var title='Responsive web design'
console.log(title.includes('Responsive'))
// TH2: KT trong mảng array 
var courses=[
    'Javascript',
    'PHP',
    'Dart'];
console.log(courses.includes('Javascript'))
/*
Bài 62 
Math object
-Math.PI
-Math.round()
-Math.abs()
-Math.ceil(): Làm tròn trên . Điều iện phải lớn hơn 
-Math.floor(): Làm tròn dưới
-Math.random(): Trả về 1 số ngẫu nhiên
-Math.min()
-Math.max() */
var random=Math.floor(Math.random()*5)
var bonus=[
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);
var random=Math.floor(Math.random()*100)
random<50 ? console.log('Cường hóa thành công!'):console.log('Thất bại')
// Bai63 -- Callback 
// Là hàm (function) được truyền qua đối số khi gọi hàm khác
//1. Là hàm
//2. Được truyền qua đối số
function myFunction(param){
  if(typeof param == "function"){

    param(123)
  }  
    
}
function myCallback(value){
    console.log('Value: ',value);
}

myFunction(myCallback)
//Callback phần 2
// Array.prototype.map2=function(callback){
//     var output=[],arrayLength=this.length
//     for(var i=0;i<arrayLength;i++){
//         var result=callback(this[i],i,this)
//         output.push(result)
//     }
//     return output
// }
// var htmls=courses.map2((course)=>{
//     return `<h2>${course}</h2>`;
// })
// console.log(htmls.join('\n'))

//Bài tập
// map, forEach, every, some,  reduce, find ,fillter;

var courses = [
    { id: 1, course: "HTML", coin: 0 },
    { id: 2, course: "JavaScript", coin: 200 },
    { id: 3, course: "HTML", coin: 500 },
    { id: 4, course: "HTML", coin: 250 }
];
var htmls1=courses.map((course) => {
  return `
        
        <h2>ID:${course.id}</h2>
        <p>Title:${course.course}</p>  
          `
})
console.log(htmls1.join('\n'))
// Array.prototype.every2 = function(callBack) {
//   for (var i in this) {
//     if(this.hasOwnProperty(i)) {
//       if (callBack(this[i], i) === false) {
//         return false;
//       }
//   	}
//   }
//   return true;
// }

// Array.prototype.some2 = function(callBack) {
//   for (var i in this) {
//     if(this.hasOwnProperty(i)) {
//       if (callBack(this[i], i) === true) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// Array.prototype.reduce2 = function(callBack, initiateValue) {
// 	var length = this.length;
//   var output;
//   if(arguments.length<2){
//         i=1
//         initiateValue=this[0]
//     } 
//   for (var i = 0; i < this.length; i++) {
  	
//   	output = callBack(output, this[i], i);
//   }
//   return output;
// }
// var numbers1=[1,2,,4,5]
// var kq=numbers1.reduce2((total1,number1)=>{
//   return total1+number1
// })
// console.log(kq)


// Array.prototype.find2 = function(callBack) {
//   for (var i in this) {
//   	if (callBack(this[i], i)) {
//     	return this[i];
//     }
//   }
//   return undefined;
// }

// Array.prototype.filter2 = function(callBack) {
// 	var output = [];
//   for (var i in this) {
//   	if (callBack(this[i], i)) {
//     	output.push(this[i]);
//     }
//   }
//   return output;
// }

// var sumCoin = courses.find2(function(course, index) {
// 	return course.course === 'JavaScript';
// });
// console.log(sumCoin)