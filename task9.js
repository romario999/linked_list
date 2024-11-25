// Структура для вузла зв’язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для розділення списку
function partition(head, x) {
    let smallerHead = new ListNode(0); // Віртуальний вузол для списку з меншими за x
    let greaterHead = new ListNode(0); // Віртуальний вузол для списку з більшими або рівними x
    let smaller = smallerHead; // Поточний вузол для списку з меншими
    let greater = greaterHead; // Поточний вузол для списку з більшими або рівними
    
    // Ітеруємо через початковий список
    while (head !== null) {
        if (head.val < x) {
            smaller.next = head; // Додаємо до списку з меншими
            smaller = smaller.next; // Переміщаємо вказівник
        } else {
            greater.next = head; // Додаємо до списку з більшими або рівними
            greater = greater.next; // Переміщаємо вказівник
        }
        head = head.next; // Переміщаємося до наступного вузла
    }
    
    // Оскільки список з більшими або рівними x має бути останнім, обриваємо його
    greater.next = null;
    
    // З’єднуємо два списки: список з меншими вузлами і список з більшими або рівними
    smaller.next = greaterHead.next;
    
    return smallerHead.next; // Повертаємо голову новоствореного списку
}

// Приклад використання:

// Створення списку 1 -> 4 -> 3 -> 2 -> 5 -> 2
let head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);

// Викликаємо функцію з x = 3
let result = partition(head, 3);

// Виведення результату
while (result !== null) {
    console.log(result.val);
    result = result.next;
}
