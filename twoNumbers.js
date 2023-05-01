
function ListNode(val) {
    this.val = val;
    this.next = null;
}


const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const getData = (list) => {
  console.log(list);
  let arr = [];
  while(list){
    arr.push(list.val);    
  }
  return arr;
}
const addTwoNumbers = (l1, l2) => {
    let p1 = l1;
    let p2 = l2;
    let num1 = 0;
    let num2 = 0;
    let carry = 0;
    let temp = new ListNode(0);
    let currentNode = temp;
    
  
    while(p1 || p2){
      
        num1 = (p1) ? p1.val : 0;
        num2 = (p2) ? p2.val : 0;

      if( num1 + num2 + carry > 9){
        currentNode.next = new ListNode( num1 + num2 + carry - 10);
        currentNode = currentNode.next;
        carry = 1;
        
      }
      else {
        currentNode.next = new ListNode( num1 + num2 + carry);
        currentNode = currentNode.next;
        carry = 0;
      }
      
      if(p1) p1 = p1.next;
      if(p2) p2 = p2.next;
    }
  
    return temp.next;
}



console.log(addTwoNumbers(l1, l2)); // [7, 0, 8]


