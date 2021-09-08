

function Node() { //bt节点
    this.text = ''; //节点的文本
    this.leftChild = null; //节点的左孩子引用
    this.rightChild = null; //节点右孩子引用
}
//1.2 二叉树装载的字符串
var strText = "";
var charecters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var len = charecters.length; //数组的长度
var nodes = new Array(); //创建一个临时数组，用于存放二叉树节点

//循环创建二叉树节点存放到数组中
for (var i = 0; i < len; i++) {
    var node = new Node();
    node.text = charecters[i];
    nodes.push(node);
}
console.log(nodes)

function buildBt2() {
    index = 0; //索引从0开始
    //循环建立二叉树子节点的引用
    while (index < len) {
        var leftIndex = 2 * index + 1, //当前节点左孩子索引
            rightIndex = 2 * index + 2; //当前节点右孩子索引
        //给当前节点添加左孩子
        nodes[index].leftChild = nodes[leftIndex];
        //给当前节点添加右孩子
        nodes[index].rightChild = nodes[rightIndex];
        index++;
    }
}

buildBt2()
console.log(nodes[0])

//2.1递归实现：
function buildBt1(node, i) {
    var leftIndex = 2 * i + 1, //左孩子节点的索引
        rightIndex = 2 * i + 2; //右孩子节点的索引
    if (leftIndex < charecters.length) { //判断索引的长度是否超过了charecters数组的大小
        var childNode = new Node(); //创建一个新的节点对象
        childNode.text = charecters[leftIndex]; //给节点赋值
        node.leftChild = childNode; //给当前节点node加入左孩子节点
        buildBt1(childNode, leftIndex); //递归创建左孩子
    }
    if (rightIndex < charecters.length) { //同上
        var childNode = new Node();
        childNode.text = charecters[rightIndex];
        node.rightChild = childNode;
        buildBt1(childNode, rightIndex);
    }
}

var node = new Node();
node.text = charecters[0];
buildBt1(node, 0); //索引i是从0开始构建
console.log(node)

//----------------------------------------------将二叉树翻转----------------------------------
var temp;
function Exchange(node) {
    if (node.leftChild || node.rightChild) {
        temp = node.leftChild;
        node.leftChild = node.rightChild;
        node.rightChild = temp;
        Exchange(node.leftChild)
        Exchange(node.rightChild)
    }
}
Exchange(node)
console.log(node);
//-----------------------------------------------二叉树先序遍历输出----------------------------------
var arr = [];
function FirstConsole(node,arr) {
    arr.push(node.text)
    if(node.leftChild){
        FirstConsole(node.leftChild, arr)
    }
    if(node.rightChild){
        FirstConsole(node.rightChild, arr)
    }
}
FirstConsole(node,arr);
console.log(arr)
//-----------------------------------------------二叉树中序遍历输出----------------------------------
var arr = [];
function CenterConsole(node,arr) {
    if(node.leftChild){
        CenterConsole(node.leftChild, arr)
    }
    arr.push(node.text)
    if(node.rightChild){
        CenterConsole(node.rightChild, arr)
    }
}
CenterConsole(node,arr);
console.log(arr)
//-----------------------------------------------二叉树后序遍历输出----------------------------------
var arr = [];
function LastConsole(node,arr) {
    if(node.leftChild){
        LastConsole(node.leftChild, arr)
    }
    if(node.rightChild){
        LastConsole(node.rightChild, arr)
    }
    arr.push(node.text)
}
LastConsole(node,arr);
console.log(arr)
