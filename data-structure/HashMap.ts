/**
 * LeetCode Problem (Easy):
 * 232. Implement Queue using Stacks
 */

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

class Entry<K, V> {
    key: K;
    value: V;
    next: Entry<K, V> | null;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap<K, V> {
    private readonly SIZE = 1000;
    private table: Array<Entry<K, V> | null>;

    constructor() {
        this.table = Array<Entry<K, V> | null>(this.SIZE);
    }

    private hash(key: K): number {
        return Number(key) % this.SIZE;
    }

    public put(key: K, value: V): void {
        const index = this.hash(key);
        let entry: Entry<K, V> | null = this.table[index];
        while (entry) {
            if (entry.key === key) {
                entry.value = value;
                return;
            }
            entry = entry.next;
        }
        entry = new Entry(key, value);
        entry.next = this.table[index];
        this.table[index] = entry;
    }

    public get(key: K): V | null {
        const index = this.hash(key);
        let entry = this.table[index];
        while (entry) {
            if (entry.key === key) {
                return entry.value;
            }
            entry = entry.next;
        }
        return null;
    }

    public remove(key: K): void {
        const index = this.hash(key);
        let previous = null;
        let entry = this.table[index];
        while (entry) {
            if (entry.key === key) {
                if (previous === null) {
                    this.table[index] = entry.next;
                } else {
                    //@ts-ignore
                    previous.next = entry.next;
                }
                return;
            }
            //@ts-ignore
            previous = entry;
            entry = entry.next;
        }
    }
}

const myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
