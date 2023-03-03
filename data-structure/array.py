import ctypes

"""
Recall: Arrays
# Consecutive memory block 
    => Array of 4 integers = consecutive 4 * 32 = 128 bits 
    => We can work out the location of the i-th integer with a simple formula
        -> if arr[0] starts in the memory at location 1000
        -> Thus, the 4th cell, array[3], is at location:: 1000+3 * 32 = 10096
        -> Hence, it's O(1) to find an element
index               0           1           2           3
Value               6           10          8           15
Memory Location     1000        10032       10064       10096
"""


class Array:

    def __init__(self, size, initial_value=None):
        self.size = size
        self._capacity = max(16, 2 * size)

        array_data_type = ctypes.py_object * self._capacity
        self.memory = array_data_type()

        for i in range(self._capacity):
            self.memory[i] = initial_value

    def __len__(self):
        return self.size

    def __getitem__(self, idx):
        return self.memory[idx]

    def __setitem__(self, idx, value):
        self.memory[idx] = value

    # not efficient way:

    # def append(self, item):
    #     # 1) create a new array of bigger size
    #     array_data_type = ctypes.py_object * (self.size + 1)
    #     new_memory = array_data_type()
    #     # 2) copy data from old array
    #     for idx in range(self.size):
    #         new_memory[idx] = self.memory[idx]
    #     # 3) add the new element at the last position and increase the size
    #     new_memory[self.size] = item
    #     self.size += 1
    #     # user the new memory and delete the old one
    #     del self.memory
    #     self.memory = new_memory

    # more efficient way:

    def append(self, item):
        if self.size == self.__capacity:
            self.expand_capacity()
        self.memory[self.size] = item
        self.size += 1

    def expand_capacity(self):
        # expand the old capacity
        self.__capacity *= 2
        # create a new array of bigger size
        array_data_type = ctypes.py_object * self.__capacity
        new_memory = array_data_type()
        # copy data from old array
        for idx in range(self.size):
            new_memory[idx] = self.memory[idx]
        # user the new memory and delete the old one
        del self.memory
        self.memory = new_memory

    def insert(self, idx, item):
        # expand capacity
        if self.size == self.__capacity:
            self.expand_capacity()
        # negative index
        if idx < 0:
            idx += self.size
        # if index is out of the bound
        if idx < 0:
            idx = 0
        elif idx > self.size:
            idx = self.size
        # shift alle elements to right
        for p in range(self.size - 1, idx - 1, -1):
            self.memory[p + 1] = self.memory[p]
        # insert the new item
        self.memory[idx] = item
        self.size += 1

    def right_rotate(self):
        if self.size == 0:
            return
        # expand capacity
        if self.size == self.__capacity:
            self.expand_capacity()
        # save the right item in temp
        last_item = self.memory[self.size - 1]
        # shift right
        for idx in range(self.size - 1, -1, -1):
            self.memory[idx + 1] = self.memory[idx]
        # insert right element to first position
        self.memory[0] = last_item

    def right_rotate_steps(self, times):
        # get the steps we need
        steps = times % self.size
        for i in range(steps):
            self.right_rotate()

    def left_rotate(self):
        # expand capacity
        if self.size == self.__capacity:
            self.expand_capacity()
        # save the right item in temp
        left_item = self.memory[0]
        # shift right
        for idx in range(self.size):
            self.memory[idx] = self.memory[idx + 1]
        # insert right element to first position
        self.memory[self.size - 1] = left_item

    # # creation new memory
    # def pop(self, idx=None):

    #     # by default pop the last element
    #     if idx is None:
    #         idx = self.size-1
    #     # Throw Index out of the range Error
    #     if idx < 0 or idx > self.size - 1:
    #         raise IndexError('Index out of the range')
    #     # return after remove
    #     pop_item = self.memory[idx]

    #     # shrink the array one element
    #     array_data_type = ctypes.py_object * (self.size - 1)
    #     new_memory = array_data_type()
    #     # insert all elements in new array except pop element
    #     for i in range(self.size):
    #         if i >= idx:
    #             new_memory[i-1] = self.memory[i]
    #         else:
    #             new_memory[i] = self.memory[i]

    #     del self.memory
    #     self.memory = new_memory
    #     self.size -= 1

    #     return pop_item

    def pop(self, idx):
        assert idx >= -self.size and idx < self.size, 'pop index out of range'

        if idx < 0:
            idx += self.size

        val = self.memory[idx]

        # left shift the array
        # observe: if we remove the last a few values,
        # it will be very efficient due to few steps
        for p in range(idx + 1, self.size):
            self.memory[p - 1] = self.memory[p]

        self.size -= 1
        return val

    def index_transposition(self, value):
        for idx in range(self.size):
            if self.memory[idx] == value:
                if idx == 0:
                    return 0
                # Swap the 2 elements
                self.memory[idx], self.memory[idx -
                                              1] = self.memory[idx - 1], self.memory[idx]
                return idx - 1
        return -1


class Array2D:
    def __init__(self, rows, cols, initial_value=None):
        self.rows, self.cols = rows, cols

        self.grid = Array(rows)  # 1-D array for each row
        for i in range(rows):
            self.grid[i] = Array(cols, initial_value)  # columns of ith row

    def __getitem__(self, index):
        r, c = index[0], index[1]
        return self.grid[r][c]

    def __setitem__(self, index, value):
        r, c = index[0], index[1]
        self.grid[r][c] = value

    def __repr__(self):
        result = ''
        for i in range(self.rows):
            result += str(self.grid[i]) + '\n'
        return result


if __name__ == '__main__':
    arr1d = Array(14)

    # create 2x4 grid initialized to 0
    arr2d = Array2D(2, 4, 0)
    arr2d[(0, 2)] = 3
    arr2d[(1, 1)] = 5
    arr2d[(1, 3)] = 7
    print(arr2d.__repr__())
    # 0, 0, 3, 0,
    # 0, 5, 0, 7,
    print(arr2d[(1, 3)])    # 7
