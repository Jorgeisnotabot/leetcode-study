class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists || lists.length === 0) return null;
    
    return mergeHelper(lists, 0, lists.length - 1);
}

function mergeHelper(lists: Array<ListNode | null>, start: number, end: number): ListNode | null {
    if (start === end) return lists[start];
    if (start > end) return null;
    
    const mid = Math.floor((start + end) / 2);
    const left = mergeHelper(lists, start, mid);
    const right = mergeHelper(lists, mid + 1, end);
    
    return mergeTwoLists(left, right);
}

// Helper function: merge two sorted linked lists
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes
    current.next = l1 || l2;
    
    return dummy.next;
}