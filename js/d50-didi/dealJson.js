function jsonCamelToLine(json, deep = 1) {
  const deal = (node, height) => {
    if (height > deep) {
      return;
    }
    
    Object.keys(node).forEach(key => {
      if (/[A-Z]+/.test(key)) {
        const temp = node[key];
        delete node[key];
        node[camelToLine(key)] = temp;
      }
    });

    Object.values(node).forEach(item => {
      if (typeof item === 'object') {
        deal(item, height + 1);
      }
    });
  };

  deal(json, 1);
  return json;
}

function camelToLine(str) {
  return (str + "").replace(/([A-Z]+)/, ($1) => {
    return "_" + $1.toLowerCase();
  })
}


const res = jsonCamelToLine({
  nameAge: 1,
  b: {
    ageName: "111",
    nameAge: {
      ageName: "111"
    }
  }
}, 1);

console.log(res);
