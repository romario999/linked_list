// Структура для вузла пов'язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для перевірки наявності циклу в списку
function hasCycle(head) {
    if (head === null) return false;  // Якщо список порожній, циклу немає

    let slow = head;  // Черепаха
    let fast = head;  // Зайчик

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // Черепаха рухається на 1 крок
        fast = fast.next.next;      // Зайчик рухається на 2 кроки

        // Якщо черепаха і зайчик зустрілися, то в списку є цикл
        if (slow === fast) {
            return true;
        }
    }

    return false;  // Якщо зайчик досяг кінця списку, циклу немає
}

// Приклад використання:

// Створення списку: 3 -> 2 -> 0 -> -4
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);

// Створення циклу: хвіст вказує на 1-й елемент (індекс 1)
head.next.next.next.next = head.next;  // -4 -> 2

// Перевірка на наявність циклу
console.log(hasCycle(head));  // Виведе true, оскільки є цикл

// Створення іншого списку без циклу
let head2 = new ListNode(1);
head2.next = new ListNode(2);
console.log(hasCycle(head2));  // Виведе false, оскільки немає циклу
