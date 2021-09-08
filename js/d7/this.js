var name="xxx";
function show() {
console.log(this.name)
}
var obj1 = {
name:"111",
show: show
}
var obj2 = {
name:"www",
show: obj1.show
}
obj1.show();
obj2.show();
obj1.show.call(obj2)