function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}
Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName ;
}
function Student(firstName,lastName,schoolName,grade){
    Person.call(this,firstName,lastName);
    this.schoolName=schoolName;
    this.grade=grade;
}
Student.prototype=new Person();
Student.prototype.constructor=Person();
var student=new Student('Nguyễn','Văn Thế','nguyenvanthe.com',10);
console.log(student.getFullName());

Student.prototype.address="Thừa Thiên Huế"
var student1= new Student('Văn','Thế')
console.log(student1.address)
var student2=new Student('Văn ', 'THẾ')
console.log(student2.address)
// ------------- Bài thực hành Javascript ----------------

// function BookStore(book_product,children_book,tool_book)
// Bài 1
function Book_Store(id_product,name_product,quantity,price){
    this.id_product=id_product;
    this.name_product=name_product;
    this.quantity=quantity;
    this.price=price;
}
BookStore.prototype.getFullBook=function(){
    return 
}
function Book_Product(home_publish,year_publish,author,day_publish,time_republished){
    BookStore.call(this, id_product,name_product,quantity,price);
    this.home_publish=home_publish;
    this.year_publish=year_publish;
    this.author=author;
    this.day_publish=day_publish;
    this.time_republished=time_republished;
}
Book_Product.prototype.getCategories = function (){
    return
}
function Category  (id_category,type_category,description_category) {
    Book_Product.call(this,home_publish,year_publish,author,day_publish,time_republished);
    this.id_category = id_category;
    this.type_category = type_category;
    this.description_category = description_category;
}

function Category_Book(literary_category,science_category,politics_category,religion_category,children_category){
    Category_Book.call(this,id_category,type_category.description_category);
    this.literary_category=literary_category;
    this.science_category=science_category;
    this.politics_category=politics_category;
    this.religion_category=religion_category;
    this.children_category=children_category;
}
u
function Children_Product(origin_product,trademark_product,supplier_product,instruct_product){
    BookStore.call(this, id_product,name_product,quantity,price);
    this.origin_product=origin_product;
    this.trademark_product=trademark_product;
    this.supplier_product=supplier_product;
    this.instruct_product=instruct_product;
}
function Tool_Product(origin_product,trademark_product,supplier_product,color_product,material_product,size_product){
    BookStore.call(this, id_product,name_product,quantity,price);
    this.origin_product=origin_product;
    this.trademark_product=trademark_product;
    this.supplier_product=supplier_product;
    this.instruct_product=instruct_product;
    this.color_product=color_product;
    this.material_product=material_product;
    this.size_product=size_product;
}
// Bài 2