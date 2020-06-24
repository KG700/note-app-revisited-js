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
        console.log(note.getText())
        return "<li><div>" + note.getText() + "</div></li>"
      })
      return "<ul>" + html.join("") + "</ul>";
    }

  }

  exports.NoteListView = NoteListView;
})(this);
