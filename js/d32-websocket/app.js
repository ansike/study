/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-06-06 14:52:57
 * @LastEditTime: 2019-12-22 21:31:52
 */

var ws = require("nodejs-websocket");
const port = 4000;
console.log(ws.createServer);
var server = ws
  .createServer(function(conn) {
    console.log(conn);
    conn.on("text", function(str) {
      var data = JSON.parse(str);
      console.log(data);

      switch (data.type) {
        case "setname":
          conn.nickname = data.name;

          boardcast(
            JSON.stringify({
              type: "serverInformation",
              message: data.name + " 加入房间"
            })
          );

          boardcast(
            JSON.stringify({
              type: "chatterList",
              list: getAllChatter()
            })
          );
          break;

        case "chat":
          boardcast(
            JSON.stringify({
              type: "chat",
              name: conn.nickname,
              message: data.message
            })
          );
          break;

        default:
          break;
      }
    });

    conn.on("close", function() {
      boardcast(
        JSON.stringify({
          type: "serverInformation",
          message: conn.nickname + " 离开房间"
        })
      );

      boardcast(
        JSON.stringify({
          type: "chatterList",
          list: getAllChatter()
        })
      );
    });

    conn.on("error", function(err) {
      console.log(err);
    });
  })
  .listen(port);
console.log("websocket server listen port is" + port);

function boardcast(str) {
  server.connections.forEach(function(conn) {
    conn.sendText(str);
  });
}

function getAllChatter() {
  var chatterArr = [];

  server.connections.forEach(function(conn) {
    chatterArr.push({ name: conn.nickname });
  });

  return JSON.stringify(chatterArr);
}
