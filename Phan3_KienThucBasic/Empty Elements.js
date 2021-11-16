var courses=[
    'JavaScript',
    'Ruby',
    'PHP'
];

var array1=new Array(10)
array1.push('JavaScript','Ruby')
console.log(array1);
for (var index in array1){
    console.log(array1[index])
}
Array.prototype.map2=function(callback){
    var output=[],arrayLength=this.length
    for(var i=0;i<arrayLength;i++){
        var result=callback(this[i],i,this)
        output.push(result)
    
    }
    return output
}
var htmls=courses.map2((course)=>{
    return `<h2>${course}</h2>`;
})
console.log(htmls.join('\n'))
// ForEach
Array.prototype.forEach2=function(callback){
   for(var index in this){
       if(this.hasOwnProperty(index)){
           callback(this[index],index,this)
       }
   }
}
courses.forEach2((course,index,array)=>{
    console.log(index,course,array);

})
Array.prototype.filter2=function(callback){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
           var result =callback(this[index],index,this)
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}
var courses1 = [
    { 
        id: 1, course: "HTML", coin: 800 
    },
    { 
        id: 2, course: "JavaScript", coin: 200
     },
    { 
        id: 3, course: "HTML", coin: 9000 
    },
    { 
        id: 4, course: "HTML", coin: 250 
    }
];
var filterCourses= courses1.filter2((course,index,array) => {
      return  course.coin <700
})
console.log(filterCourses)
// Some
var courses=[
    {
        name:   'Javascript',
        coin: 680,
        isFinite: true,
    },
    {
        name:   'PHP',
        coin: 860,
        isFinite: true,
    },
    {
        name: 'Ruby',
        coin: 980, 
        isFinite: true,
    }
];
Array.prototype.some2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index],index,this)
            if(result){
                return true
            }

        }

    }
    return false    
}
var isResult= courses.some2((course,index)=>{
    return course.isFinite
})
console.log(isResult)
// every
Array.prototype.every2=function(callback){
    var output=true
    for(var index in this){
        if(this.hasOwnProperty(index)){
           // result1=callback(this[index],index,this)
            if(!callback(this[index],index,this)){
                output=false
                break
            }
        }
    }
    return output
}
var isResult1=courses.every2((course,index)=>{
    return course.coin>680
})
console.log(isResult1)
