class Node {
  constructor(ele, next) {
    this.ele = ele;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    // 头指针
    this.head = this.createEmpty("head");
  }

  createEmpty(ele) {
    if (!ele) throw Error(`请确定链表的属性是否正确：${ele}`)
    return new Node(ele, null);
  }

  update(ele, newEle) {
    let cur = this.find(ele);
    cur.ele = newEle;
    return cur;
  }

  insert(ele, pos) {
    let curNoe = this.createEmpty(ele);
    let posNode = this.find(pos);
    curNoe.next = posNode.next;
    posNode.next = curNoe;
    return this.head;
  }

  append(ele) {
    this.getLast().next = this.createEmpty(ele);
  }

  delete(ele) {
    let prev = this.findPrev(ele);
    prev.next = prev.next.next;
    return "success";
  }

  find(ele) {
    let cur = this.head;
    while (cur.ele !== ele) {
      if (cur.next === null) return -1;
      cur = cur.next;
    }
    return cur;
  }

  findPrev(ele) {
    let cur = this.head;
    if (!cur.next) return;
    while (cur.next.ele !== ele) {
      if (cur.next === null) return -1;
      cur = cur.next;
    }
    return cur;
  }

  display() {
    let cur = this.head;
    while (cur.next !== null) {
      console.log(cur.next.ele);
      cur = cur.next;
    }
  }
  getLast() {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    return cur;
  }
}

const getLast = (list) => {
  let cur = list;
  let prev;
  while (cur.next.next !== null) {
    prev = cur;
    cur = cur.next;
    prev.next = null;
  }
  return cur;
}

function reverseList(list) {
  let p1 = list.head;
  let p2 = p1.next;
  let p3 = p2.next;

  while (p2 !== null) {
    p3 = p2.next;
    p2.next = p1;
    p1 = p2;
    p2 = p3;
  }
  list.head.next = null;
  list.head = p1;
  return list;
}
let list = new LinkList();
list.insert('test1', 'head');
list.insert('test2', 'head');
list.insert('test3', 'head');
list.insert('test4', 'head');
// 展示所有链表
list.display();
// console.log(list);

// 删除
console.log("delete test3", list.delete("test3"));
list.display();

// 更新
console.log("update test1=》test111", list.update("test1", "test111"));
list.display();

let reverse = reverseList(list);
// console.log(reverseList(list));
reverse.display();