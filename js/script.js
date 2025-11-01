function person(name, course){
  this.name = name;
  this.course = course;
  this.greet = function(){
    console.log("Hello my name is " + name + " and am taking " + course);
  }
}

let person1 = new person("Henry", "BIT");
let person2 = new person("Shuaib", "Batman");

person1.greet();
person2.greet();