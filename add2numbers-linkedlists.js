var addTwoNumbers = function(l1, l2) {
    let l1here = l1;
    let l2here = l2;
    let temp;
    let results;
    let resultsHere;
    let carryOver = 0;
    while (l1here !== null || l2here !== null) {
        temp = l1here ? l1here.val : 0;
        if (l2here) {
            temp += l2here.val;
        }
        temp += carryOver;
        if (temp > 9) {
            carryOver =  Math.floor(temp / 10);
            temp = temp % 10;
        } else {
            carryOver = 0;
        }
        if (!results) {
            results = new ListNode(temp);
            resultsHere = results;
        } else {
            resultsHere.next = new ListNode(temp);
            resultsHere = resultsHere.next;
        }
        l1here = l1here ? l1here.next : null;
        l2here = l2here ? l2here.next : null;
    }
    if (carryOver > 0) {
        resultsHere.next = new ListNode(carryOver);
    }
    return results;
}