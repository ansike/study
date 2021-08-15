/*
 * @Description: 反转链表
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2021-08-11 23:35:08
 * @LastEditTime: 2021-08-15 11:32:51
 */

// 反转链表
const link = {
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

const res1 = reverse1(JSON.parse(JSON.stringify(link)));
console.log(res1);
function reverse1(head) {
  if(head === null || head.next === null) return head;
  const cur = reverse1(head.next);
  head.next.next = head;
  head.next = null;
  return cur;
}

const res2 = reverse2(JSON.parse(JSON.stringify(link)));
console.log(res2);
function reverse2(head) {
  if (head === null || head.next === null) return head;
  let prev = null, cur = head;
  while(cur){
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}
