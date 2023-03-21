function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Animal.prototype.run = function () {
  console.log(this.name + "动物会跑");
};

const animal = new Animal("小兔子", 10);
console.log(animal);
animal.run();

// new原理
function _new(Fn, ...args) {
  // 1. 创建一个对象并把对象的原型链指向构造函数原型
  /*
    let obj = {};
    obj.__proto__ = Fn.prototype;  // ie不能直接操作__proto__
    Object.setPrototypeOf(obj,Fn.prototype); // 相当于上面obj.__proto__ = Fn.prototype
  */
  let obj = Object.create(Fn.prototype);
  // 2. 执行该构造函数
  const result = Fn.call(obj, ...args);
  // 3. 看执行构造函数返回的结构，如果结果是对象或者函数，则返回该结果，否则返回第一步创建的新对象
  if (
    (result !== null && typeof result === "object") ||
    typeof result === "function"
  ) {
    return result;
  } else {
    return obj;
  }
}

const a = _new(Animal, "小兔子", 20);
console.log(a);
