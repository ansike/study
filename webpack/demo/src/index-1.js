import _ from "lodash"
import "./style.css";
import "./iconfont/iconfont.css";
import PNG from "./play.png";
import Data from "./data.xml";
import Json from "./data.json";
import printMe from "./print.js";

function component() {
  const element = document.createElement('div');
  const elementI = document.createElement('i');
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  elementI.innerHTML = _.join(["Hello", "webpack2"], " ");

  elementI.classList.add("iconfont");
  elementI.classList.add("icon-bianji1");
  element.classList.add('hello');
  const image = new Image();
  image.src = PNG;
  element.appendChild(image);
  element.appendChild(elementI);
  console.log("Data", Data);
  console.log("Json", Json);

  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  (+element.appendChild(btn));
  return element;
}

document.querySelector("#app").appendChild(component());