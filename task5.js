// Структура для вузла пов'язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для видалення вузла з однозв'язного списку
function deleteNode(node) {
    // Оскільки нам надається вузол, ми просто заміняємо значення цього вузла на значення наступного вузла
    node.val = node.next.val;
    node.next = node.next.next; // Перенаправляємо вказівник на наступний вузол після наступного
}

// Приклад використання:

// Створення списку: 4 -> 5 -> 1 -> 9
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);

// Видалення вузла зі значенням 5
deleteNode(head.next); // head.next — це вузол зі значенням 5

// Виведення результату
let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
