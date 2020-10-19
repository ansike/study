const cssLoader = (source) => {
  console.log('cssloader', typeof source);
  const res = `const header = document.querySelector('head');
  const style = document.createElement('style');
  style.innerHTML = ${JSON.stringify(source)};
  header.appendChild(style);`
  return res;
};

module.exports = cssLoader;