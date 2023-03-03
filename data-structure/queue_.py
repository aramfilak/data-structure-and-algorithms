#    FIFO= First in, First out
#    enqueue (Value): Add in the end of the queue
#    dequeue(): Delete from the front of the queue
#    Useful functionalities: isEmpty(), isFull(), clear(), frontQueue(), rearQueue()


class Node:
    def __init__(self, data):
        self.next = None
        self.data = data

    def __repr__(self):
        return f'{self.data}'


class Queue:

    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def __repr__(self):
        represent = ''
        temp_head = self.head

        while temp_head is not None:
            represent += str(temp_head.data)
            temp_head = temp_head.next
            if temp_head:
                represent += ', '

        return represent

    def add(self, value):
        new_node = Node(value)

        if self.head is None:
            self.head = new_node
            self.head.next = self.tail
            self.tail = new_node
            self.size += 1
        else:
            self.tail.next = new_node
            self.tail = new_node
            self.size += 1

    def remove(self):
        if not self.size:
            raise IndexError('remove from empty queue')
        else:
            rem_element = self.head
            self.head = self.head.next
            self.size -= 1
        return rem_element

    def print(self):
        cur = self.head
        while cur:
            print(cur.data)
            cur = cur.next

    def is_empty(self):
        return self.size == 0

    def clear(self):
        self.__init__()

    def queue_head(self):
        return self.head

    def queue_tail(self):
        return self.tail


if __name__ == '__main__':
    q = Queue()
    print(q.is_empty())
    q.add(1)
    print(q.queue_head())
    print(q.queue_tail())
    print(q.is_empty())
    q.add(2)
    q.add(3)
    q.add(5)
    q.add(6)
    print(q)
    q.remove()
    q.clear()
    q.print()
    q.add(7)
    print(q)

