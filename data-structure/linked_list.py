"""

#Linked List Scattered memory calls
    => A linked list of four integers will have four cells scattered at different locations in the memory
       (each containing the data and a 'next' node)
    => We have to follow the links to find the ith integer
    => Hence, it's O(n) to find an element

Index                   0               1               2               3
Value                   6|next->        4|next->        1|next->        5|next->       null
Memory Location         4554            5156            70728           15561

"""


class Node:
    def __init__(self, data, next=None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev

    def __repr__(self):
        return f'{self.data}'


class LinkedList:
    def __init__(self, initial_values=None):
        self.head = None
        self.tail = None
        self.length = 0

        if initial_values:
            for value in initial_values:
                self.insert_end(value)

    def _add_node(self, node):
        self.length += 1

    def _delete_node(self, node):
        self.length -= 1

    # def insert_end(self, value):
    #     node = Node(value)
    #     self._add_node(node)
    #
    #     if not self.head:
    #         self.head = self.tail = node
    #     else:
    #         self.tail.next = node
    #         self.tail = node

    def print(self):
        temp_head = self.head

        while temp_head is not None:
            print(temp_head.data, end='->')
            temp_head = temp_head.next
        print('None')

    def print_revers(self):
        cur = self.head
        while cur is not None:
            print(cur.data, end='->')
            cur = cur.prev
        print('None')

    def __iter__(self):
        cur = self.head
        while cur is not None:
            yield cur
            cur = cur.next

    def __repr__(self):
        represent = ''
        cur = self.head

        while cur is not None:
            represent += str(cur.data)
            cur = cur.next
            if cur:
                represent += ', '

        return represent

    ##############################################
    @staticmethod
    def _link(first, second):
        if first:
            first.next = second
        if second:
            second.prev = first

    def insert_end(self, value):
        node = Node(value)
        self._add_node(node)

        if not self.head:
            self.head = self.tail = node
        else:
            self._link(self.tail, node)
            self.tail = node

    def insert_front(self, value):  # O(1) time - O(1) memory
        item = Node(value)
        self._add_node(item)

        self._link(item, self.head)
        self.head = item

        if self.length == 1:
            self.tail = self.head

    def delete_front(self):  # O(1) time - O(1) memory
        if not self.head:
            return

        next = self.head.next
        self._delete_node(self.head)
        self.head = next

        if self.head:
            self.head.prev = None

        if self.length <= 1:
            self.tail = self.head

    def delete_end(self):
        if self.length <= 1:
            self.delete_front()
            return
        previous = self.tail.prev
        self._delete_node(self.tail)
        self.tail = previous
        self.tail.next = None

    def _delete_link_node(self, node):
        if not node:
            return
        is_tail = node == self.tail
        prev = node.prev
        self._link(prev, node.next)
        self._delete_node(node)

        if is_tail:
            self.tail = prev

        return prev

    def delete_node_with_key(self, key):
        if not self.length:
            return

        if self.head.data == key:
            self.delete_front()
        else:
            cur = self.head
            while cur:
                if cur.data == key:
                    self._delete_link_node(cur)
                    break
                cur = cur.next

    def get_nth(self, n):  # O(n) time - O(1) memory
        temp_head = self.head
        cnt = 1

        while temp_head is not None:
            if cnt == n:
                return temp_head
            temp_head = temp_head.next
            cnt += 1
        return None

    def swap_pairs(self):
        temp_head = self.head

        while temp_head is not None and temp_head.next is not None:
            temp_head.data, temp_head.next.data = temp_head.next.data, temp_head.data
            temp_head = temp_head.next.next

    def reverse(self):  # O(n) time - O(1) memory
        if self.length <= 1:
            return
        # the head node will be the tail after the Processing
        self.tail = self.head
        # swap the first node with the second
        prv = self.head
        self.head = self.head.next

        while self.head:
            # store & reverse link
            next = self.head.next
            self.head.next = prv
            # move step
            prv = self.head
            self.head = next

        # Finalize self.head and self.tail
        self.head = prv
        self.tail.next = None

    def delete_even_positions_sll(self):  # O(n) time - O(1) memory
        if self.length <= 1:
            return
        # use the first 2 nodes
        prev, cur = self.head, self.head.next
        while cur:
            # prev is odd, prev-next is even
            if not prev.next:  # if tail
                break
            cur = prev.next.next
            prev = prev.next

    def _embed_after(self, node, value):
        # Add a node with value between node and its next
        new_node = Node(value)
        self._add_node(new_node)
        self._link(new_node, node.next)
        self._link((node, new_node))

    def insert_sorted(self, value):  # O(n) time - O(1) memory
        # 3 special cases for simplicity
        if not self.length or value <= self.head.data:
            self.insert_front(value)
        elif self.tail.data <= value:
            self.insert_end(value)
        else:
            prev, cur = None, self.head
            while cur:
                if value <= cur.data:
                    self._embed_after(prev, value)
                    break
                prev, cur = cur, cur.next

        # This idea is used in Insertion Sort Algorithm

    def swap_head_and_tail(self):  # O(n) time - O(1) memory

        if self.length <= 1:
            return

        if self.length == 2:
            self.head, self.tail = self.tail, self.head
            self.head.next = self.tail
            self.tail.next = None
            return

        prv_tail = self.get_nth(self.length - 1)
        # make current tail as self.head
        # link tail to the 2nd node
        self.tail.next = self.head.next
        # make current self.head as tail
        # link tail's previous to self.head
        prv_tail.next = self.head
        self.head.next = None
        # swap
        self.head, self.tail = self.tail, self.head

    def right_rotate(self):  # O(n) time - O(1) memory
        if self.length <= 1:
            return
        # get the tail-prv-node and point it to None
        prv_tail = self.get_nth(self.length - 1)
        prv_tail.next = None
        # point tha tail to the head
        self.tail.next = self.head
        # tail is the head and prv-tail is the tail
        self.head, self.tail = self.tail, prv_tail

    def right_rotate_steps(self, n):  # O(n) time - O(1) memory
        if self.length <= 1 or n % self.length == 0:
            return
        # remove useless cycles
        n %= self.length

        for i in range(n):
            self.right_rotate()

    # O(n) time - O(n) memory -> worst-case O(n^2) time
    def remove_duplicates_from_not_sorted(self):
        unique_value = {}
        prv, cur = None, self.head

        for i in range(1, self.length):
            # if this value don't exist in dict, set the value in dict and got one step forward
            if unique_value.get(cur.data) is None:
                unique_value.setdefault(cur.data, cur.data)
                prv, cur = cur, cur.next

            else:
                self._delete_node(cur)
                # point prv to cur-next
                prv.next = cur.next
                # the prv still prv but the cur-node is next-node to the deleted-node
                prv, cur = prv, prv.next

            # if is the tail and duplicate , delete cur the node and set prv-node as tail
            if cur is self.tail and unique_value.get(cur.data) is not None:
                self.tail = prv
                self.tail.next = None

    def delete_last_occurrence_target(self, target):  # O(n) time - O(n) memory
        to_delete = []
        prv, cur = None, self.head
        for i in range(1, self.length + 1):
            if cur.data == target:
                # append all equal nodes and prv-nodes to target to the value
                to_delete.append([prv, cur])
            prv, cur = cur, cur.next

        # if value doesn't exist, return
        if len(to_delete) == 0:
            return
        # delete_last_occurrence in the leste
        cur = to_delete[-1][-1]
        prv = to_delete[-1][0]

        # last item in linked list
        if self.head.next is None:
            self.head = None
            self.tail = None
            return

        #  if is head
        if cur is self.head:
            self.head = self.head.next
            return
        #  if is tail
        if cur is self.tail:
            self.tail = prv
            self.tail.next = None

        else:
            prv.next = cur.next

    def _move_to_end(self, cur, prv):
        # Move cur after the tail and return its next
        next = cur.next
        self.tail.next = cur

        if prv:
            prv.next = next
        else:
            self.head = next  # cur was self.head

        self.tail = cur
        self.tail.next = None
        return next

    # O(n) time - O(1) memory
    def move_key_occurrence_to_the_end(self, target):
        if self.length <= 1:
            return

        # For each matching key, move it to the end!
        # But, be careful from infinite loop. Iterate maximum self.length
        length = self.length
        prev, cur = None, self.head

        while cur and length:
            if cur.data == target:
                cur = self._move_to_end(cur, prev)
            else:
                prev, cur = cur, cur.next
            length -= 1

    def odd_pos_even_pos(self):  # O(n) time - O(1) memory
        if self.length <= 2:
            return
        cur_odd, first_even = self.head, self.head.next

        while cur_odd.next and cur_odd.next.next:
            next_even = cur_odd.next
            # connect odd with odd and even with even
            cur_odd.next = cur_odd.next.next
            next_even.next = next_even.next.next
            cur_odd = cur_odd.next
            # for odd self.length, is changed to last even node
            if self.length % 2 == 1:
                self.tail = next_even
        # connect last odd with the first even
        cur_odd.next = first_even

    def insert_alternate(self, another_lst):  # O(n) time - O(1) memory
        # another linked list is empty
        if another_lst.length < 1:
            return
        # self linked list is empty
        if self.head is None:
            self.__init__(another_lst)
            return

        h1 = self.head
        h2 = another_lst.head
        h1_next = self.head.next
        h2_next = another_lst.head.next

        while h1:
            # if cur node is tail
            if h1 is self.tail:
                h1.next = h2
                self.tail = another_lst.tail
                return
            elif h2 is another_lst.tail:
                h1.next = h2
                h2.next = h1_next
                return

            # point self.node to another node
            h1.next = h2
            h2.next = h1_next
            # move on
            h1 = h1_next
            h2 = h2_next
            # move temp on
            h1_next = h1_next.next
            h2_next = h2_next.next

    def add_num(self, another_lst):
        # let X = max(length, another_lst.length)
        # let Y = max(length, another_lst.length) - min(length, another_lst.length)
        # O(X) time and O(Y) memory
        if not another_lst.length:
            return

        cur1, cur2 = self.head, another_lst.head
        carry = 0

        # Iterate on both in the same time: add l2's node value to l1's node value
        while cur1 or cur2:
            value1, value2 = 0, 0
            if cur1:
                value1 = cur1.data
            if cur2:
                value2 = cur2.data
                cur2 = cur2.next

            value1 += value2 + carry
            carry = value1 // 10
            value1 %= 10

            if cur1:  # put new value
                cur1.data = value1
                cur1 = cur1.next
            else:  # first ended, keep adding the values of the 2nd
                self.insert_end(value1)
            # we can even stop earlier
        if carry:
            self.insert_end(carry)

    def _reverse_k_steps(self, k):
        # reverse n steps
        for i in range(1, k + 1):
            temp = self.head
            self.head = self.head.next
            self.tail.next = temp
            temp.next = None
            self.tail = temp

    def reverse_chains(self, k):
        # Reverse each K consecutive nodes
        if self.length <= 1 or k <= 1:
            return

        def _reverse_sub_chain(cur, k):  # we can code static
            # Given a node: reverse only a chain of k nodes
            # return: reversed_chain_head, reversed_chain_tail, NEXT chain head

            tail = cur  # the self.head is self.tail once reversed
            prev, cur = cur, cur.next

            while k > 1 and cur:  # k-1 links reversed
                k -= 1
                next_node = cur.next  # store
                cur.next = prev  # reverse
                prev, cur = cur, next_node  # move step

            return prev, tail, cur

        last_tail = None
        next_chain_head = self.head
        self.head = None

        while next_chain_head:
            # Keep reversing a chain of K nodes, link with prev chain
            chain_head, chain_tail, next_chain_head = _reverse_sub_chain(
                next_chain_head, k)
            self.tail = chain_tail

            if not self.head:  # first chain
                self.head = chain_head
            else:  # connect last chain tail with next chain head
                last_tail.next = chain_head
            last_tail = chain_tail

        self.tail.next = None

    def delete_all_nodes_with_key(self, key):
        if self.length < 1:
            return

        cur = self.head
        while cur:
            if cur.data == key:
                if cur is self.head:
                    # if alle values equal to the key
                    if cur.next is None:
                        self.head = None
                        self.tail = None
                        return
                    else:
                        self.head = cur.next
                        self.head.prev = None

                elif cur is self.tail:
                    self.tail = self.tail.prev
                    self.tail.next = None

                else:
                    # point prev to next and next to prev
                    cur.prev.next, cur.next.prev = cur.next, cur.prev
            # move on
            cur = cur.next

    def delete_even_positions_dll(self):
        prv, cur = None, self.head

        if self.length <= 1:
            return
        if self.length <= 2:
            self.head.next = None
            self.tail = self.head
            return

        while cur:
            if cur.next.next is None:
                cur.next = None
                self.tail = cur
                self.tail.prev = prv
                return

            if cur.next.next is self.tail:
                cur.next = self.tail
                self.tail.prev = cur
                return

            # point odd to the odd
            cur.next = cur.next.next
            cur.next.next.prev = cur

            # move forward
            prv, cur = cur, cur.next

    def delete_odd_positions_dll(self):
        # the head will be ode, rest is same
        self.head = self.head.next
        self.head.prev = None
        self.delete_even_positions_dll()

    def is_Palindrome(self):
        if self.length <= 1:
            return
        pointer_left = self.head
        pointer_right = self.tail
        steps = self.length // 2

        while steps != 0:
            # not Palindrome
            if pointer_left.data != pointer_right.data:
                return False
            # move pointer left to right and pointer left to right
            pointer_left = pointer_left.next
            pointer_right = pointer_right.prev
            steps -= 1
        # is Palindrome
        else:
            return True

    def find_the_middle(self):
        # empty
        if not self.length:
            return None

        # steps we need    steps = (self.length  // 2) + 1
        steps = self.length
        steps = (steps // 2) + 1
        cur_node = self.head
        # odd ->  middle-element  even -> second-middle element
        if self.length == 1:
            return cur_node

        while cur_node:

            if steps == 1:
                return cur_node.data
            cur_node = cur_node.next
            steps -= 1

    def find_the_middle_in_dll_without_length(self):
        if not self.head:
            return None

        start, end = self.head, self.tail

        while start != end and start.next != end:
            start, end = start.next, end.prev

        return end.data

    def find_the_middle_in_sll_without_length(self):
        # We can use "Tortoise and Hare" Algorithm
        # slow-pointer will jump one in every iteration
        # fast-pointer will jump tow step in every iteration
        if not self.head:
            return None

        slow, fast = self.head, self.head

        while fast and fast.next:
            middle_node = slow
            fast = fast.next.next
            slow = slow.next
        return middle_node

    def swap_forward_with_backward(self, k):
        # First think in the different scenarios, then handle them

        if k > self.length:
            return
        kth_back = self.length - k + 1

        if k == kth_back:
            return  # same node

        if k > kth_back:
            k, kth_back = kth_back, k  # swap

        first = self.get_nth(k)
        last = self.get_nth(kth_back)

        first_prev, first_next = first.prev, first.next
        last_prev, last_next = last.prev, last.next

        if k + 1 == kth_back:  # consecutive neighbours:
            self._link(first_prev, last)
            self._link(last, first)
            self._link(first, last_next)
        else:
            self._link(first_prev, last)
            self._link(last, first_next)

            self._link(last_prev, first)
            self._link(first, last_next)

        if k == 1:
            self.head, self.tail = self.tail, self.head  # swap

    def reverse_dll(self):
        if self.length <= 1:
            return

        first, second = self.head, self.head.next
        while second:
            first_, second_ = second, second.next  # copy to move later
            self._link(second, first)  # reverse
            first, second = first_, second_  # move

        self.head, self.tail = self.tail, self.head  # swap
        self.head.prev = self.tail.next = None  # integrity

    def merge_2sorted_list(self, other):  # On+m
        if not other.head:
            return

        if self.head:
            cur1, cur2 = self.head, other.head
            self.head = last = None

            while cur1 and cur2:
                # pick the smallest among the 2 lists and then link
                if cur1.data <= cur2.data:
                    next = cur1
                    cur1 = cur1.next
                else:
                    next = cur2
                    cur2 = cur2.next

                self._link(last, next)
                last = next
                if not self.head:  # first step
                    self.head = last

            if cur2:  # our self.tail is from 2nd
                self.tail = other.tail
                self._link(last, cur2)
            elif cur1:
                self._link(last, cur1)

        else:  # use its data
            self.head = other.head
            self.tail = other.tail

        self.length += other.length
        self.debug_data.extend(other.debug_data)


if __name__ == '__main__':
    ll = LinkedList([1, 2, 6, 3, 4, 5, 6]);
    print(ll.tail)
    print(ll.tail.next)
    print(ll)
    print(ll.head.next)
    print(ll.tail)
    print(ll.tail.next)

