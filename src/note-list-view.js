((exports) => {

  class NoteListView {

    constructor(noteList) {
      this.noteList = noteList;
    }

    html = () => {
      if (this.noteList.all().length === 0) {
        return "";
      }
      const html = this.noteList.all().map(note => {
        return "<li><div>" + note.getText().slice(0,20) + "</div></li>"
      })
      return "<ul>" + html.join("") + "</ul>";
    }

  }

  exports.NoteListView = NoteListView;
})(this);
