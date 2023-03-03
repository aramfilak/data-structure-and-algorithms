
import java.util.EmptyStackException;
/* 

Stack follow FILO-Concept {First in, Last out}
Stack usually support function such as push(), pop(), peek() and empty()
                           | 2 |
                           | 0 |
                           | 7 |
                           | 9 |
                           | 1 |
We can implement a stack using Array or Linked-list. Both implementations are simple and intuitive!

        <------   Array-Based Stack   ------>

*/

public class StackArray extends Exception {

    int size;
    int capacity = 0;
    int nextIndex;
    int[] stack;

    public StackArray(int size) {
        this.stack = new int[size];
        this.size = size;
        // next_index next free position in array (to put stack top-element)
        this.nextIndex = size - 1;
    }

    public boolean istFull() {
        return this.capacity == this.size;
    }

    public void push(int value) {
        if (istFull())
            throw new StackOverflowError();

        this.stack[nextIndex] = value;
        this.nextIndex--;
        capacity++;
    }

    public int peek() {
        if (empty())
            throw new EmptyStackException();
        return this.stack[this.size - this.capacity];
    }

    public int pop() {
        if (empty())
            throw new EmptyStackException();

        int popValue = this.stack[size - capacity];
        this.stack[size - capacity] = 0;
        capacity--;
        nextIndex++;
        return popValue;
    }

    public boolean empty() {
        return this.capacity == 0;
    }

    public void print() {
        if (empty())
            return;
        int startPoint = this.size - this.capacity;
        for (int i = startPoint; i <= this.size - 1; i++) {
            System.out.println(" => |  " + this.stack[i] + "  |");
        }
    }

    public static void main(String[] args) {

        StackArray st = new StackArray(6);
        System.out.println(st.size);
        // push
        st.push(1);
        st.push(2);
        st.push(3);
        st.push(4);
        st.push(5);
        st.push(6);
        // pop
        st.pop(); // 6
        st.pop(); // 5
        // print
        st.print();
        // is empty
        System.out.println(st.empty());
        // isFull
        System.out.println(st.istFull());
        // peek
        System.out.println(st.peek());

        // 6
        // Next => | 4 |
        // Next => | 3 |
        // Next => | 2 |
        // Next => | 1 |
        // false
        // false
        // 4
    }
}
