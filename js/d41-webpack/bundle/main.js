const b = require("./src/b.js");
import("./src/a.js").then(res => {
  console.log(res.default.a);
});

console.log(1);
console.log(b.b);
