"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      console.log(d, b, "d, bd, b", Object.setPrototypeOf);
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) {
            console.log(p, b, b[p]);
            if (Object.prototype.hasOwnProperty.call(b, p)) {
              d[p] = b[p];
            }
          }
        };
      console.log(extendStatics, "extendStatics");
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Animal = /** @class */ (function () {
  function Animal(name, age, desc) {
    this.name = name;
    this.age = age;
    this.desc = desc;
    this.name = name;
    this.age = age;
  }
  Animal.prototype.run = function () {};
  return Animal;
})();
var Dog = /** @class */ (function (_super) {
  __extends(Dog, _super);
  function Dog(name, age) {
    var _this = _super.call(this, name, age, "爱好") || this;
    _this.name = name;
    _this.age = age;
    _this.name = name;
    _this.age = age;
    return _this;
  }
  Dog.prototype.wang = function () {
    console.log("旺旺旺");
  };
  return Dog;
})(Animal);
console.log(Dog.prototype);
var animal = new Dog("小兔子", 10);
console.log(animal);
