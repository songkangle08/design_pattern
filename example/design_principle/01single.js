// 单一职责原则

// 以交通工具运行为例

// 方案1
{
  class Vehicle {
    constructor() {}
    run(vehicle) {
      console.log(vehicle + "在路上跑");
    }
  }

  const vehicle = new Vehicle();
  vehicle.run("摩托车");
  vehicle.run("汽车");
  vehicle.run("飞机");

  /*
    方式1：
    // 1. 在方式1的run方法中，违法了单一职责原则
    // 2. 解决的方案非常简单，根据交通工具运行的方式不同，分解成不同的类即可。
  */
}

// 方案2
{
  class RoadVehicle {
    constructor() {}
    run(vehicle) {
      console.log(vehicle + "路上运行");
    }
  }

  class SkyVehicle {
    constructor() {}
    run(vehicle) {
      console.log(vehicle + "空中运行");
    }
  }

  class WaterVehicle {
    constructor() {}
    run(vehicle) {
      console.log(vehicle + "水中运行");
    }
  }

  const roadVehicle = new RoadVehicle();
  const skyVehicle = new SkyVehicle();
  const waterVehicle = new WaterVehicle();

  roadVehicle.run("摩托车");
  roadVehicle.run("摩托车");
  skyVehicle.run("飞机");
  waterVehicle.run("轮船");

  /*
    方式2：
    // 1. 遵守了单一职责原则
    // 2. 改动很大，开销很大（建立了3个类）
    // 3. 改进：直接修改Vehicle类，改动的代码会比较少 => 方案3
  */
}

// 方案3
{
  class Vehicle {
    run(vehicle) {
      console.log(vehicle + "路上运行");
    }
    runSky(vehicle) {
      console.log(vehicle + "空中运行");
    }
    runWater(vehicle) {
      console.log(vehicle + "水中运行");
    }
  }

  const vehicle = new Vehicle();
  vehicle.run("摩托车");
  vehicle.run("飞机");
  vehicle.run("轮船");

  /*
    方式3
    // 1. 这个方式没有对原来的类做大的修改，只是增加了方法。
    // 2. 这种方式虽然在类上没有遵守单一职责原则，但是在方法上遵守了单一职责原则。
  */
}

/*
  单一职责原则注意事项和细节：
    1. 降低类的复杂度，一个类只负责一项职责
    2. 提高类的可读性，可维护
    3. 降低变更引起的风险
    4. 通常情况下，我们应当遵守单一职责原则，只要逻辑足够简单，才可以在代码级别违法单一职责原则，只有类中方法数量足够少，可以在方法级别保持单一职责原则。
*/
