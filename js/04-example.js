/*
  Write a Notes class that manages the collection of notes in the items property.
  A note is an object with text and priority properties. Add a static property Priority to the class, which will store the object with priorities.

  {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  }

  Add methods addNote(note), removeNote(text) and updatePriority(text, newPriority).
*/


class Notes {
  #items;

  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  };

  constructor(arr) {
    this.#items = arr;
  }

  get items() {
    return this.#items;
  }

  addNote(note) {
    this.#items.push(note);
  }

  removeFirstNote(text) {
    const idx = this.#items.findIndex(item => item.text === text);
    if (idx > -1) {
      this.#items.splice(idx, 1);
    } else {
      console.error("Does not exist");
    }
  }

  removeAllNotes(text) {
    this.#items = this.#items.filter(item => item.text !== text);
  }

  updatePriority(text, newPriority) {
    const note = this.#items.find(item => item.text === text);
    if (note) {
      note.priority = newPriority;
    } else {
      console.error("Does not exist");
    }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
console.table(myNotes.items);

myNotes.addNote({
  text: 'My second note',
  priority: Notes.Priority.NORMAL,
});
console.table(myNotes.items);

myNotes.removeFirstNote('My first note');
console.table(myNotes.items);

myNotes.updatePriority('My second note', Notes.Priority.HIGH);
console.table(myNotes.items);