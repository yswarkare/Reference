/**
Create a hash table

Implement below function

set item

get item

delete item
 */

const hash = (key, size) => {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }
    return hashedKey % size;
}

class HashTable {
    constructor() {
        this.size = 10;
        this.buckets = Array(this.size);
        for (let i = 0; i < this.size; i++) {
            this.buckets[i] = new Map();
        }
    }

    getItem(key) {
        let index = hash(key, this.size);
        return this.buckets[index].get(key);
    }

    setItem(key, value) {
        let index = hash(key, this.size);
        this.buckets[index].set(key, value);
    }

    deleteItem(key) {
        let index = hash(key, this.size);
        this.buckets[index].delete(key);
    }
}

let ht = new HashTable();
ht.setItem('Hockey', 'India');
ht.setItem('Cricket', 'England');
ht.setItem('Football', 'Brazil');
ht.setItem('Baseball', 'America');
ht.setItem('Ice Hockey', 'Canada');
ht.setItem('Badminton', 'Malaysia');
ht.setItem('Polo', 'Argentina');
ht.deleteItem('Cricket');
ht.deleteItem('Polo');
ht