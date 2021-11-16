document.write('Hello, world ')
/*-------- -----------Chuỗi Trong JS -------------------------------- */
/*
1. Tạo chuỗi 
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash(\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
*/
// 1 Tạo chuỗi
var fullName='Đây là thằng \'Thế\''
console.log(fullName)
//3 Xem độ dài chuỗi
console.log("Độ dài fullName la: "+fullName.length)
// Sử dụng template string
var firstName='Nguyễn'
var lastName='Văn Thế'
console.log('Tôi là:: '+firstName+' '+lastName)
console.log(`Tôi là: ${firstName} ${lastName}`) // Khuyến khích Sử dụng Template 

/*-------------------- Làm Việc với chuỗi ------------------------------- */
var myString='Học Js tại JS JS F8 JS!'
// Keyword: Javascript string methods

//1. Length

//2. Find index
console.log(myString.indexOf('Js')) // Lấy vị trí đầu  có tên JS
console.log(myString.indexOf('JS',6 )) // Bắt đầu từ 1 vị trí đầu tiên rồi nó trả về giá trị 11 
console.log(myString.lastIndexOf('JS')) // Lấy vị trí cuối có tên là Js
console.log(myString.search())
//3. Cut string
console.log(myString.slice(4)) // 
//4. Replace
var myString1='Học JS tại JS JS JS F8'
console.log(myString1.replace('JS', 'JavaScript')) // Sửa Js thành JavaScript
console.log(myString1.replace(/JS/g, 'JavaScript')) // Chuyển đổi tất cả từ 'JS' thành 'JavaScript'
//5. Covert to upper case // Chuyển đổi tất cả chuỗi thành chữ hoa 
console.log(myString1.toUpperCase())
//6. Covert to lower case // Chuyển đổi tất cả chuỗi thành chữ thường
console.log(myString1.toLowerCase())
//7.Trim  // Loại bỏ kí tự trắng thừa
//8. Split : Cắt chuỗi
var language='JavaScript, PHP, Ruby'
console.log(language.split(', '))
//9. Get a character by index
 var string1='Học Javascript tại F8'
 console.log(string1.slice(4,14))
 console.log(string1.slice(14, 21))
var name1=' Học javascript tại F8       '
console.log(name1.search('javascript'))
console.log(name1.trim().slice(4,14))
console.log(name1.trim())



/*------------------- Số và làm việc với số  */
// Keyword JavaScript number methods
Number.isFinite() //Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger() //Xác địnhxem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat() //Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt() //Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed() //Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString() //Chuyển đổi và trả về số đã cho dưới dạng chuỗi



