//1. Element: ID, class, tag, CSS selector,HTML collection
//2. Attribute
//3. Text
//Element
var headingNode= document.querySelector('.heading')
console.log(headingNode)
//Class
var headingNodes=document.getElementsByClassName('heading')
console.log(headingNodes)
//Tag
var h2Node= document.getElementsByTagName('h2')
console.log(h2Node)
//CSS selector

var headingNode_Selector=document.querySelector(' .box .heading-2:nth-child(2)')
console.log(headingNode_Selector)
//HTML collection
console.log(document.forms['form-2'])

// Bài tập 5: DOM get element methods
/*câu hỏi :
1. Get checkbox input NodeList lưu vào biến checkboxNodes
2. Get checkbox input element có type="checkbox" value="1" lưu vào biến checkbox1Element
3. Get checkbox element có attribute checked nhưng không có attribute disabled lưu vào biến checkboxCheckedAndNotDisabled
4. Get checkbox element có attribute disabled nhưng không có attribute checked lưu vào biến checkboxDisabledAndNotChecked
5. Get checkbox element có attribute checked và disabled lưu vào biến checkboxCheckedAndDisabled*/
// Cách 1
var element = function query(selector) {
    return document.querySelector(selector);
}
var checkboxNodes = document.querySelectorAll('input[type=checkbox]');
var checkbox1Element = element('input[type=checkbox][value="1"]');
var checkboxCheckedAndNotDisabled = element('input[checked]:not([disabled])');
var checkboxDisabledAndNotChecked = element('input[disabled]:not([checked])');
var checkboxCheckedAndDisabled = element('input[checked][disabled]');
// Cách 2
var checkboxNodes = document.querySelectorAll("input[type='checkbox']");
var checkbox1Element = document.querySelector
("input[type='checkbox'][value='1']");
var checkboxCheckedAndNotDisabled = document.querySelector
("input[type='checkbox'][checked]:not([disabled])");
var checkboxDisabledAndNotChecked = document.querySelector
('input[disabled]:not([checked])');
var checkboxCheckedAndDisabled = document.querySelector
('input[disabled][checked]');
console.log(checkbox1Element)
