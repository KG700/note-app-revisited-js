((exports) => {

  class SingleNoteView {
    constructor(note = Note) {
      this.note = note;
    }

    html() {
      return `<div>${this.note.getText()}</div>`
    }
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
