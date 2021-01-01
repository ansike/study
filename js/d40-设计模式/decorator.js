/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-11-27 17:00:25
 * @LastEditTime: 2019-11-27 17:22:20
 */
// ----------------------------es5---------------------
function compose(...fns) {
  return function(data) {
    fns.forEach(item => {
      item(data);
    });
  };
}

function validate(data) {
  if (!data.name) {
    throw "name is empty";
  }
  if (!data.age) {
    throw "age is empty";
  }
}

function submit(data) {
  console.log("submit", data);
}

submit = compose(validate, submit);

// submit({ name: 0, age: 2 });

// ----------------------------es6---------------------
class Circle{
  draw(){
    console.log("draw circle")
  }
}

class GeoCircle{
  constructor(geo){
    this.geo = geo;
  }
  paint(){
    this.geo.draw();
    console.log("painting")
  }
}

let circle = new Circle();

let newCircle = new GeoCircle(circle);
newCircle.paint();

// --------------------------------demo
function testDec(target) {
  target.isDec = "林海";
}

@testDec
class Demo {}

console.log(Demo.isDec);