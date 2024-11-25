// Структура для вузла пов'язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для подвоєння числа у вигляді зв'язаного списку
function doubleLinkedListNumber(head) {
    // Перетворюємо число з числа списку в ціле
    let number = 0;
    let current = head;
    while (current !== null) {
        number = number * 10 + current.val;  // Формуємо число з цифр списку
        current = current.next;
    }
    
    // Множимо число на 2
    number *= 2;
    
    // Створюємо новий список, що представляє подвоєне число
    let dummy = new ListNode(0); // Віртуальний початковий вузол
    let newHead = dummy;
    
    // Перетворюємо подвоєне число назад у зв'язаний список
    let digits = number.toString();  // Перетворюємо число в рядок для доступу до кожної цифри
    for (let digit of digits) {
        newHead.next = new ListNode(Number(digit)); // Додаємо новий вузол
        newHead = newHead.next;
    }
    
    return dummy.next; // Повертаємо головний вузол нового списку
}

// Приклад використання

// Створення списку: 1 -> 8 -> 9 (189)
let head = new ListNode(1);
head.next = new ListNode(8);
head.next.next = new ListNode(9);

// Подвоєння числа
let newHead = doubleLinkedListNumber(head);

// Виведення результату
let current = newHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
