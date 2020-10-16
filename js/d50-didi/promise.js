const Pending = "Pending";
const Fulfilled = "Fulfilled";
const Rejected = "Rejected";
function Promise(executor) {
  this.status = Pending;
  this.value = undefined;
  this.reason = undefined;
  this.thenArr = [];
  this.errorArr = [];

  const resolve = (val) => {
    if(this.status === Pending){
      this.value = val;
      this.status = Fulfilled;
      this.thenArr.forEach(item => item(val))
    }
  }

  const reject =  (val) => {
    if(this.status === Pending){
      this.value = val;
      this.status = Rejected;
      this.errorArr.forEach(item => item(val))
    }
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function then(fn1) {
  this.thenArr.push(fn1);
  return new this.constructor();
};

const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

pro.then((res) => {
  console.log(res);
},()=>{
  
})

pro.then((b) => {
  console.log(b);
})

console.dir(pro, {depth: 9});