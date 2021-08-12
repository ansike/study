/*
 * @Description: 反转链表
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-08-11 23:35:08
 * @LastEditTime: 2021-08-12 23:44:09
 */


const link1 = {
  name: "l1",
  data: "l1",
  next: {
    name: "l2",
    data: "l2",
    next: {
      name: "l3",
      data: "l3",
      next: null,
    },
  },
};

// const res = reverse(link1);
// console.log(res);


function reverse(head) {
  // 链表为空或者递归到最后一个节点
  if (head === null || head.next === null) return head;
  const curNode = reverse(head.next);
  console.log(curNode);
  head.next.next = head;
  head.next = null;
  return curNode;
}

// const res2 = reverse2(link1);
// console.log(res2);
// 双指针循环,守卫指针和首指针
function reverse2(head) {
  while (head === null || head.next === null) return head;
  let prev = null, cur = head;
  while(cur){
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}

const res3 = reverse3(link1);
console.log(res3);
// 双指针循环,首指针和next指针循环,首指针需要特殊处理一下
function reverse3(head) {
  while (head === null || head.next === null) return head;
  let next = head.next, cur = head;
  head.next = null;
  while(next){
    const t = next.next;
    next.next = cur;
    cur = next;
    next = t;
  }
  return cur;
}
