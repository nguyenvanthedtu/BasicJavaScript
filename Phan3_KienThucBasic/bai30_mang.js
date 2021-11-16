/*---------------------Bai 30 : Mảng -----------------  */
// Cách 1
var languages= [
    'Javascript',
    'PHP',
    'Ruby',
    'Python'
];
console.log(languages)
// Cách 2
var languages1=new Array(
    'Javascript',
    'PHP'
)
console.log(languages1)
// Kiểm tra kiểu dữ liệu
// Kiểm tra đối tượng languages1 có phải là Array không
console.log(Array.isArray({}))
// Lấy phần tử theo index
console.log(languages1[1])
/*-----------  Làm việc với Array */
/*
1. To string
2. Join 
3. Pop // Xóa đi phần tử cuối mảng
4. Push // Thêm 1 hoặc nhiều  phần tử vào cuối mảng
5. Shift // Xóa đi phần tử đầu tiên  ở mảng->
6. Unshift // THêm 1 phần tử hoặc nhiều phần tử vào đầu mảng
7. Splicing // Xóa 1 phần tử bất kỳ (splice)
8. Concat   // Nối array
9. Slicing  // Cắt một và element
*/
// console.log(languages.toString())
// console.log(languages.pop())
// Cuối mảng và trả vè phần tử đã 
var input=[
    'Javascript',
    'PHP',
    'Ruby'
]
console.log('Xóa đi: '+input.splice(1,0))
console.log(input)
console.log('--------------------------------')
var anArray=[1,2,3,4];
anArray.length <3 ? anArray.push(): anArray.splice(2,3)
console.log(anArray)
console.log('--------------------------------')
var animals=[1,2];
animals.length==0 ? animals.splice(0,0, 'Cat', 'Mouse'): animals.length<=1
? animals.unshift('Elephant'): animals.splice(0,1, 'Monkey', 'Tiger')
console.log(animals)