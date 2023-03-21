# 基础

## new 关键字

new 一个对象，到底发生了什么？

- 1). 创建了一个对象，并把这个对象的原型链（**\_\_proto\_\_**）指向该构造函数的原型（**prototype**）
- 2). 调用该构造函数，并把该构造函数中的 this 指向这个新创建的对象
- 3). 判断该构造函数是否有返回值，如果有返回值并且返回值是对象或者函数的话，则返回该返回值，否则返回新创建的对象。

```javascript
function _new(Fn, ...args) {
  // 第一步
  /*
    const obj = {};
    obj.__proto__ = Fn.prototype;   // ie不能直接操作__proto__
    Object.setPrototypeOf(obj,Fn.prototype); // 相当于上面那就话看，设置实例的原型
  */
  // Object.create相当于上面的两句话
  const obj = Object.create(Fn.prototype);
  // 第二步
  const result = Fn.call(obj, ...args);
  // 第三步
  return (result != null && typeof result === "object") ||
    typeof res === "function"
    ? result
    : obj;
}
```

## instanceof 关键字

instanceof 运算符用于检测构造函数的**prototype**是否出现在某个实例的原型链上。

```javascript
function _instanceof(left, right) {
  // let  proto = left.__proto__;
  let proto = Object.getPrototypeOf(left); // 获取左边对象的原型
  let prototype = right.prototype; // 获取右边对象的原型
  while (true) {
    if (!proto) return false;
    if (proto === prototype) {
      return true;
    }
    // proto = proto.__proto__
    proto = Object.getPrototypeOf(proto); // 获取原型
  }
  return false;
}
```

## class 关键字

1. Class 类可以看作是构造函数的语法糖

```javascript
class Animal {}
console.log(typeof Animal);
console.log(Animal === Animal.pototype.constructor);
```

2. Class 类中的方法都定义在该构造函数的原型上

```javascript
class Animal {
  run() {}
  eat() {}
}
// 等同于
Animal.prototype = { constructor() {}, run() {}, eat() {} };
```

3. 使用 static 关键字，作为静态方法/属性（静态方法/属性，只能通过类调用，实例不能调用）

```javascript
class Animal {
  static name = "Animal";
  static speak() {
    console.log("hello");
  }
}
Animal.speak();
Animal.name;
```

4. extends 关键字，底层也是利用寄生组合式继承

```javascript
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
class Rabbit extends Animal {
  constructor(name, age, desc) {
    super(name, age, desc);
  }
}
const rabbit = new Rabbit("小兔子", 20, "安静");
rabbit.eat();
Rabbit.speak();
```

5. Class 允许子类继承父类的静态方法和静态属性

```javascript
class Animal {
  static name = "Animal";
  static speak() {
    console.log("hello");
  }
}
class Rabbit extends Animal {
  constructor(name, age, desc) {
    super(name, age, desc);
  }
}
Rabbit.speak();
```
