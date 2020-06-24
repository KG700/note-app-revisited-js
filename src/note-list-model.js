((exports) => {

  class NoteList {
    constructor() {
      this.notes = []
    }

    all = () => {
      return this.notes;
    }

    create = (text) => {
      note = new Note(text);
      this.notes.push(note);
    }
  }

  exports.NoteList = NoteList;
})(this);
