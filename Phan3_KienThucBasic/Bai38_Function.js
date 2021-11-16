/*----------- Obeject ------------ */
var myInfo={
    name: 'Văn Thế',
    age: 21,
    address: 'Hue,VietNam',
    getName: function () {
        return this.name
    }
};
myInfo['my - emailAddress'] ='nguyenvanthedtu@gmail.com'
console.log(myInfo);
// Xóa key muốn xóa 
delete myInfo.name
// 
console.log(myInfo.getName());
// Function --- > Phương thức // Method
// Other  --- > thuộc tính  // property
/*-------------- Object constructor -------------- */
function User(firsName,lasName,avatar) 
{
    this.firsName=firsName;
    this.lasName=lasName;
    this.avatar=avatar;
    this.getName = function(){
        return `${this.lasName} ${this.firsName} ${this.avatar}`
    }
}
//  author=new User('Thế', ' Nguyễn Văn','❤️'); // New đối tượng ra
//  user=new User('Nhi',' Lê Thị Uyển ', '')
//  author.title = 'Chia sẻ đào tạo'
//  user.comment='Liệu có khóa asp.net k ad :D '
//  console.log(author.getName() + user.getName())
 /*---------- Object prototype - Basic ------------- */
 // prototype : Là thêm 1 thuộc tính ở ngoài  
/*------------------- Đối tượng Date------------------ */
var date=new Date() 
year=date.getFullYear()
month=date.getMonth()+1           // 0 - 11 Nên phải + 1
day=date.getDate()

console.log (` ${day}/${month}/${year}`)