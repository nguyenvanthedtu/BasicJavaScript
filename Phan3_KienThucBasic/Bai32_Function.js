/* Quy tắt đặt tên hàm */
// Function 
function showDialog (){
    // code
  //  alert('Hi xin chao cac ban ! ')
}
showDialog()
/*--------- Tham số trong ƠFunction */
function writeLog(message,message1){
    console.log(message+message1);
}
writeLog('xin chao cac ban','xin chao cac ban 1')
// Kiểm tra  tham số trong function có  hay không 
// Sử dụng đối tượng argument  , lưu ý : nó chỉ xuất hiện ở trong function
// Sử dụng vòng for 
function writefor () {
    var myString =''
    for (var param of arguments){
        myString += ` ${param} - `
    }
    console.log(myString)
}
writefor('Log 1', 'Log 2', 'Log 3')
/* ================ Return trong hàm   - JS cơ bản */
//var  isConfirm=confirm('Message?')
function cong(a,b) {
    return a + b 
    console.log('hihi')
    
}
var result=cong(2,8) 
console.log(result)
// Bai tap 
function sum (a,b) {
    return !isNaN(a) && !isNaN(b) ? a +b: false
}
console.log(sum(3,6))
/*------------- Hiểu hơn về function ---------- */
function stringInStringInteger(needle,haystack) {
    
    return (typeof needle == "string" && typeof haystack == "string"  && 
    needle.includes(haystack))? true:false
}
    var needle='Học Javascript1 tại F8'
    var haystack='Học Javascript1 tại F8'
console.log (stringInStringInteger (needle,haystack))
/*------------------- Các loại Funtion ---------------------*/
/*
    1. Declaration function
    2. Expression function
    3. Arrow function
 */
function showMessage (){

}
var showMessage2=function(){         // Expression function

}