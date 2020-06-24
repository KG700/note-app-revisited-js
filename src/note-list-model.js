((exports) => {

  class NoteList {
    constructor(noteModel = Note) {
      this.notes = []
      this.noteModel = noteModel
    }

    all = () => {
      return this.notes;
    }

    create = (text) => {
      const note = new this.noteModel(text);
      this.notes.push(note);
    }
  }

  exports.NoteList = NoteList;
})(this);
