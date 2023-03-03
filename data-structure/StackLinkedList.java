
/*

Stack follow FILO-Concept {First in, Last out}
Stack usually support function such as push(), pop(), peek() and empty()
                           | 2 |
                           | 0 |
                           | 7 |
                           | 9 |
                           | 1 |
We can implement a stack using Array or Linked-list. Both implementations are simple and intuitive!



        <------   LinkedList-Based Stack   ------>
*/


class Node {
    public int data;
    public Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }

    public String toString() {
        return Integer.toString(this.data);
    }
}

public class StackLinkedList {
    private Node head;
    private int size;

    public StackLinkedList() {
        this.head = null;
        this.size = 0;
    }

    public void push(int value) {
        Node item = new Node(value);
        item.next = this.head;
        this.head = item;
        this.size += 1;
    }

    public int pop() {
        if (this.head == null) {
            throw new IllegalStateException("No items!");
        }
        Node node = this.head;
        this.head = this.head.next;
        this.size -= 1;
        return node.data;
    }

    public int peek() {
        if (this.head == null) {
            throw new IllegalStateException("No items!");
        }
        return this.head.data;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public int size() {
        return this.size;
    }

    public void print() {
        if (this.head == null) return;

        Node cur = this.head;
        while (cur != null) {
            System.out.println(" next => " + cur.data);
            cur = cur.next;
        }

    }


    public static void main(String[] args) {
        StackLinkedList st = new StackLinkedList();
        // push
        st.push(1);
        st.push(2);
        st.push(3);
        st.push(4);
        st.push(5);
        st.push(6);
        System.out.println(st.size);

        st.print();
        // pop
        System.out.println(st.pop());
        System.out.println(st.pop());
        System.out.println(st.pop());
        System.out.println(st.pop());
        System.out.println(st.pop());

        System.out.println(st.peek());


        // is empty
        System.out.println(st.isEmpty());
        // isFull


    }
}
