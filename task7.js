// Структура для вузла зв'язаного списку
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Функція для об'єднання k відсортованих списків
function mergeKLists(lists) {
    // Створення мін-кучі
    const heap = new MinHeap();
    
    // Додаємо перший елемент кожного списку в мін-кучу
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            heap.push(lists[i]);
        }
    }
    
    // Віртуальний початковий вузол
    let dummy = new ListNode(0);
    let current = dummy;
    
    // Об'єднуємо списки
    while (heap.size() > 0) {
        let minNode = heap.pop();
        current.next = minNode;
        current = current.next;
        
        // Якщо є наступний елемент у списку, додаємо його в мін-кучу
        if (minNode.next !== null) {
            heap.push(minNode.next);
        }
    }
    
    // Повертаємо об'єднаний список
    return dummy.next;
}

// Мін-куча для підтримки найменшого елемента на верхівці
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(node) {
        this.heap.push(node);
        this.bubbleUp();
    }
    
    pop() {
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].val >= this.heap[parentIndex].val) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    
    bubbleDown() {
        let index = 0;
        while (index < this.heap.length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;
            
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].val < this.heap[smallest].val) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].val < this.heap[smallest].val) {
                smallest = rightChildIndex;
            }
            
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// Приклад використання

// Створення трьох відсортованих списків:
let list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

let list3 = new ListNode(2);
list3.next = new ListNode(6);

// Масив списків
let lists = [list1, list2, list3];

// Об'єднання списків
let mergedList = mergeKLists(lists);

// Виведення результату
let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
