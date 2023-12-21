/*
  Write a Storage class that creates objects for managing a warehouse of goods. When called, it will receive one argument - the initial array of goods,
  and write it to the items property.

  Add class methods:

      getItems() - returns an array of products.
      addItem(item) - receives a new product and adds it to the current ones.
      removeItem(item) - receives the product and, if it exists, removes it from the current.

*/

class Storage {
  constructor(arr) {
    this.items = arr;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(item) {
    const idx = this.items.indexOf(item);
    if (idx > -1) {
      this.items.splice(idx, 1);
    } else {
      console.error(`${item} could not be found`);
    }
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]