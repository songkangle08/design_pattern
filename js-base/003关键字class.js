class Animal {
  static name = "Animal";
  static speak() {
    console.log("hello");
  }
  constructor(name, age, desc) {
    this.name = name;
    this.age = age;
    this.desc = desc;
  }
  run() {}
  eat() {
    console.log("eat");
  }
}
console.log(new Animal("小兔子", 10, "爱好"));
console.log(typeof Animal);
console.log(Animal === Animal.prototype.constructor);
console.log(Animal.name);
console.log(Animal.speak());

class Dog extends Animal {
  constructor(name, age) {
    super(name, age, "爱好");
    this.name = name;
    this.age = age;
  }
  wang() {
    console.log("旺旺旺");
  }
}

console.log(Dog.prototype);

Dog.prototype.wang1 = function () {
  console.log("旺旺旺1");
};

const dog = new Dog("小兔子", 10);
console.log(dog);
console.log(dog.eat());
console.log(Dog.speak());

{
}
