// Структура для вузла пов'язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для об'єднання двох відсортованих списків
function mergeTwoLists(list1, list2) {
    // Створюємо віртуальний початковий вузол для полегшення з'єднання
    let dummy = new ListNode(0);
    let current = dummy;

    // Поки є елементи в обох списках
    while (list1 !== null && list2 !== null) {
        // Порівнюємо значення двох списків
        if (list1.val < list2.val) {
            current.next = list1;  // Додаємо елемент з list1
            list1 = list1.next;     // Переміщаємо вказівник в list1
        } else {
            current.next = list2;  // Додаємо елемент з list2
            list2 = list2.next;     // Переміщаємо вказівник в list2
        }
        current = current.next;  // Переміщаємо поточний вказівник вперед
    }

    // Якщо залишилися елементи в одному з списків, додаємо їх
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Повертаємо об'єднаний список, починаючи з першого елемента
    return dummy.next;
}

// Приклад використання:

// Створення першого списку list1: 1 -> 2 -> 4
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// Створення другого списку list2: 1 -> 3 -> 4
let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// Об'єднуємо списки
let mergedList = mergeTwoLists(list1, list2);

// Виведення об'єднаного списку
let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
