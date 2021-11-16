class Person {
  String name;
  int age;

  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person{
    String id;
    Student({String id, String name, int age}) : super(name, age){
      this.id = id;
    }
}

void main() {
  final student1 = Student(id: "123",name: "Barry",age: 22);
  
  print('id: ${student1.id}');
  print('name: ${student1.name}');
  print('age: ${student1.age}');
  
}