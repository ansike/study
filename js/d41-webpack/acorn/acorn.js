const acorn = require("acorn");
const estraverse = require("estraverse");
const escodegen = require("escodegen");
const dealCode = function dealCode(code) {
  console.log("初始化code：", code);
  const ast = acorn.parse(code);
  console.log("静态语法树", ast);
  estraverse.traverse(ast, {
    enter:(node, parent)=>{
      if(node.type === "VariableDeclaration"){
        console.log("遍历拿到的", node.kind);
        node.kind = "const";
      }
    }
  })
  const transCode = escodegen.generate(ast);
  console.log("转换之后的代码：", transCode);
  return JSON.stringify(transCode);
}

// dealCode(`var a = 1`);
module.exports = dealCode;