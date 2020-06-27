((exports) => {

  class NoteController {

    constructor(noteList = new NoteList) {
      this.noteList = noteList;
      this.noteList.create("Favourite food: pesto");
      this.noteListView = new NoteListView(this.noteList);
    }

    createView = () => {
      console.log(document);
      let app = document.getElementById("app");
      console.log(app);
      app.innerHTML = this.noteListView.html();
      return app;
    }

  }

  exports.NoteController = NoteController;

})(this)

// ((window, document, undefined) => {
//   const onceLoaded = () => {
//     const app = document.getElementById('app');
//   }
// window.onload = onceLoaded;
// })(window, document, undefined);
