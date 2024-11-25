// Структура для вузла зв’язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для перевертання k вузлів
function reverseKGroup(head, k) {
    if (!head || k === 1) return head; // Якщо список порожній або k = 1, нічого не змінюємо
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;  // Вказує на попередній вузол групи

    // Функція для перевертання однієї групи вузлів
    function reverseLinkedList(start, end) {
        let prev = null;
        let curr = start;
        let next = null;
        
        while (curr !== end) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev; // Повертаємо новий початок перевернутого списку
    }

    // Ітерація через список з кроком k
    while (true) {
        let kth = groupPrev;
        
        // Знаходимо k-й вузол
        for (let i = 0; i < k; i++) {
            kth = kth.next;
            if (!kth) return dummy.next; // Якщо залишилось менше ніж k вузлів, повертаємо результат
        }

        let groupStart = groupPrev.next; // Початок групи
        let groupEnd = kth.next; // Кінець групи
        kth.next = null; // Відокремлюємо групу

        // Перевертаємо поточну групу
        let newGroupStart = reverseLinkedList(groupStart, groupEnd);

        // З'єднуємо перевернуту групу з рештою списку
        groupPrev.next = newGroupStart;
        groupStart.next = groupEnd;
        
        // Оновлюємо groupPrev для наступної групи
        groupPrev = groupStart;
    }
}

// Приклад використання:

// Створення списку 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Викликаємо функцію з k = 2
let result = reverseKGroup(head, 2);

// Виведення результату
while (result !== null) {
    console.log(result.val);
    result = result.next;
}
