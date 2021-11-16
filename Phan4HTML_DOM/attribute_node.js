// var fb=document.querySelector('a')
// fb.href='https://www.facebook.com/'
// Để  thêm 1 attribute  trong 1 element
var headingElement=document.querySelector('.header h1')
// headingElement.setAttribute('class','heading')
// console.log(headingElement)
headingElement.getAttribute('heading')
console.log(heading)
var f8LinkElement=document.querySelectorAll('a')[0]
var f8ShortLink=f8LinkElement.getAttribute('href')
document.querySelectorAll('a')[1].href=f8ShortLink
console.log(f8LinkElement)
var f8LinkElement1=document.querySelector('span')
f8LinkElement1.setAttribute('data-url','abc')
console.log(f8LinkElement1)
var boxElement=document.querySelector('.box')