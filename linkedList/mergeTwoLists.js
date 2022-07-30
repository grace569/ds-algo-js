//iterative approach (leetcode accepted)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) {
        return list1;
    }
    
    let result = new ListNode();
    let currentNode = result;

    
    while(list1 || list2){
        if(!list1) {
            currentNode.next = list2;
            return result.next;
        }
        if(!list2) {
            currentNode.next = list1;
            return result.next;
        }
        
        if(list1.val <= list2.val) {
            currentNode.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            currentNode.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        
        currentNode = currentNode.next;
    }
    
    return result.next;
};
