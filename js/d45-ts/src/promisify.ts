const fs = require("fs");
const path = require("path");

type PopType<T extends any[]> = T extends [...infer U, infer _] ? U : never;
type LastType<T extends any[]> = T extends [...infer _, infer U] ? U : never;

type GetParametersType<T extends (...args: any) => any> = PopType<Parameters<T>>;
type GetLastParamType<T extends (...args: any) => any> = LastType<Parameters<T>>;

type GetCallbackReturnType<T extends (...args: any) => any> = GetLastParamType<T> extends (err: Error, data: infer R) => void ? R : any;

function promisify<T extends (...args: any) => any>(fn: T) {
  return function (...args: GetParametersType<T>) {
    return new Promise<GetCallbackReturnType<T>>((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      })
    })
  }
  // return function (...args: GetParametersType<T>): Promise<GetCallbackReturnType<T>> {
  //   return new Promise((resolve, reject) => {
  //     fn(...args, (err, data) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(data);
  //     })
  //   })
  // }
}

// const res = fs.readFile(path.resolve(__dirname, 'dataStructure.js'), 'utf-8');
// console.log(res);

(async () => {
  const res1 = await promisify(fs.readFile)(path.resolve(__dirname, 'dataStructure.js'), 'utf-8');
  console.log(res1);
})()
