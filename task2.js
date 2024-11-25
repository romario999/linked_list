// Структура для вузла пов'язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для видалення дублікатів з відсортованого списку
function deleteDuplicates(head) {
    let current = head;

    // Проходимо по списку, поки є елементи
    while (current !== null && current.next !== null) {
        // Якщо поточний елемент має таке саме значення, як наступний
        if (current.val === current.next.val) {
            current.next = current.next.next; // Пропускаємо наступний елемент
        } else {
            current = current.next; // Переміщаємося до наступного елемента
        }
    }

    // Повертаємо список без дублікатів
    return head;
}

// Приклад використання:

// Створення списку: 1 -> 1 -> 2
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);

// Видалення дублікатів
let result = deleteDuplicates(head);

// Виведення результату
let current = result;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
