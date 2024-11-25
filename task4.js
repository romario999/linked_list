// Структура для вузла пов'язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для перепорядкування списку
function reorderList(head) {
    if (!head || !head.next || !head.next.next) {
        return head; // Якщо список порожній або має лише один елемент
    }

    // 1. Знайти середину списку
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Розділити список на дві частини
    let second = slow.next;
    slow.next = null; // Розриваємо першу частину

    // 3. Перевернути другу частину списку
    second = reverseList(second);

    // 4. З'єднати дві частини по черзі
    let first = head;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

    return head;
}

// Допоміжна функція для перевертання списку
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Приклад використання:

// Створення списку: 1 -> 2 -> 3 -> 4
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Перепорядкування списку
let reordered = reorderList(head);

// Виведення результату
let current = reordered;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
