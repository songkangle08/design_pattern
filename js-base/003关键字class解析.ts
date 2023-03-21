class Animal {
  constructor(public name: string, public age: number, public desc: string) {
    this.name = name;
    this.age = age;
  }
  run() {}
}

class Dog extends Animal {
  constructor(public name: string, public age: number) {
    super(name, age, "爱好");
    this.name = name;
    this.age = age;
  }
  wang() {
    console.log("旺旺旺");
  }
}

console.log(Dog.prototype);

const animal = new Dog("小兔子", 10);
console.log(animal);

export {};
