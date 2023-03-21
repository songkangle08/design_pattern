class Animal {
  constructor() {}
  run() {}
}

class Dog extends Animal {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  wang() {
    console.log("旺旺旺");
  }
}

const animal = new Dog("小兔子", 10);

console.log(animal instanceof Dog);
console.log(animal instanceof Animal);

// instanceof 判断一个类的原型是不是在该实例的原型链上
// 原理
function _instanceof(left, right) {
  let proto = left.__proto__;
  let prototype = right.prototype;
  while (proto) {
    if (proto === prototype) return true;
    // proto = proto.__proto__;
    proto = Object.getPrototypeOf(proto); // 获取原型，相当于proto = proto.__proto__
  }
  return false;
}

console.log(_instanceof(animal, Dog));
console.log(_instanceof(animal, Animal));
console.log(_instanceof(animal, Object));
