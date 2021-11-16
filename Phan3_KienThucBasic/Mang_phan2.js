
// Array methods:
//         forEach() : Duyệt qua từng phần tử của  mảng
//         every() : Kiểm tra tất cả phần tử của mảng  thỏa mãn 1 điều kiện nào đó
//         some(): Kiểm tra 1 phần tử của mảng đúng  thì trả về true
//         find()
//         filter()
//         map() : Tìm kiếm 
//         reduce() 



var courses= [
    {
        id: 1,
        name : 'Javascript',
        coin: 200
    },
    {    
        id: 2,
        name : 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name:'Ruby',
        coin: 100
    },
    {
        id: 4,
        name: 'PHP',
        coin:0
    },
    {
        id: 5,
        name:'ReactJS',
        coin: 200
    }
];
console.log('============= Qua bài mới rồi ==================')
// Cach 1 : Duyệt qua từng phần tử của mảng dùng forEach
courses.forEach((course)=>console.log(course))



// Cach 2: Duyệt qua tùng phần tử của mảng dùng vòng lặp for
// for (var i=0;i<courses.length;i++){
    
//     console.log(i,courses[i])
// }
// // Dùng method some() để kiểm tra 1 phần tử trong mảng , như ||
var isFree= courses.some(function(course,index){
    return course.coin===0

})
console.log(isFree)
 // cach 2

 // // Dung method find () để tìm kiếm 1 phần tử trong mảng 
// //VD
var search_name =courses.find(function(course,index){
    return course.name=='Ruby'
})
console.log(search_name)
// Dùng method filter () // Trả về tất cả các  phần tử thỏa mãn

function  getRequestBodyFromValues(formValues){
    
    var obj = {}
    formValues.forEach(function (item)
    {
        obj[item.field]=item.value;
    })
    
        return obj;
    
}

    formValues=[
        { field: 'name', value: 'Thế'} ,
        { field: 'age', value: 21},
        { field: 'address', value: 'Huế' },
    ];

console.log(getRequestBodyFromValues(formValues))
console.log('---------------- Reduce ------------------------')
// Flat -- "Làm phẳng mảng từ Depth array- " Mảng sâu "
var depthArray =[1,2,[3,4],5,6,[7,8,9]];
var flatArray =depthArray.reduce(function(flatOutput,depthItem){
    return flatOutput.concat(depthItem)

},[])

console.log( flatArray);
// Lấy ra các khóa học đưa vào 1 mảng mới 
var topics = [
    {
        topic:'Front-end',
        courses:[
            {
                id:1,
                title:'HTML, CSS'
            },
            { 
                id:2,
                title:'Javascript'
            }
        ]
        
    },
    {
        topic:'Back-end',
        courses:[
            {
                id:1,
                title:'PHP'
            },
            {
                id:2,
                title:'NodeJS'
            }
        ]
        
    }

];
var newCourse= topics.reduce(function(course,top){
    return course.concat(top.courses)

},[])
console.log(newCourse)
console.log('\n')
var htmls=newCourse.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>    
    

    `
});
console.log(htmls.join(''));
// Bài 60Array.prototype.reduce2= function (callback,result1){
//     var i=0
//     // if(arguments.length<2){
//     //     i=1
//     //     result1=this[0]
//     // } 
//     for(;i<this.length;i++){
//         result1=callback(result1,this[i],i,this)
//     }
//     return  'Kết quả: '+result1;
// }
// const number1=[1,2,3,4,5]
// const result1=number1.reduce2((total,number,index,array) =>{
//     // console.log(total,number,index,array) 
//         return  total + number 
// },10)
// console.log(result1)
// 
// Tự code reduce 2
// Làm bài tập tại đây
// Array.prototype.reduce2 = function(callBack, result2) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1;
//         result2 = this[0]
//     }
//     for (; i < this.length; i++) {
//         result2 = callBack(result2, this[i], i, this)
        
//     }
//     return 'Kết quả: '+result2
// }
//     const array=[1,2,3,4,5]
//     const result2 =array.reduce2((multiply, number) => {
//         return multiply * number
//     })
// console.log(result2)

