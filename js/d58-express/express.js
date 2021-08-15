/*
 * @Description: express 模拟
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-08-15 11:36:18
 * @LastEditTime: 2021-08-15 14:25:00
 */
const { createServer } = require("http");
module.exports = class Express {
  constructor() {
    this.routers = {
      get: [],
      post: [],
      all: [],
    };
  }
  calcRouter(path, cb) {
    return { path: typeof path === "string" ? path : "/", handle: cb };
  }
  get(path, cb) {
    this.routers.get.push(this.calcRouter(path, cb));
  }
  post(path, cb) {
    this.routers.post.push(this.calcRouter(path, cb));
  }

  use(cb) {
    this.routers.all.push(this.calcRouter("/", cb));
  }

  listen(port, cb) {
    if (!port) {
      throw "请指定端口";
    }
    const server = createServer((req, res) => {
      console.log(req.url);
      const method = req.method.toLowerCase();
      const matchRoutes = [].concat(
        this.routers.all,
        this.routers[method].filter((item) => item.path === req.url)
      );
      const next = () => {
        const route = matchRoutes.shift();
        if (route && typeof route.handle === "function") {
          route.handle(req, res, next);
        }
      };
      next();
    });
    server.listen(port, cb);
  }
};
