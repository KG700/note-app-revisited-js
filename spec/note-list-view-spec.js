describe("NoteListView", () => {

  beforeEach(() => {
    noteList = new NoteList;
  })

  it("returns an empty string when the note list is empty", () => {
    noteListView = new NoteListView(noteList);
    expect(noteListView.html()).toEqual("")
  })

  it("returns an html list string with one item when the note list has one item", () => {
    noteList.create("Favourite food: pesto");
    noteListView = new NoteListView(noteList);
      expect(noteListView.html()).toEqual(
        "<ul><li><div>Favourite food: pesto</div></li></ul>"
      );
  })

  it("returns an html list string with two item when the note list has two items", () => {
    noteList.create("Favourite food: pesto");
    noteList.create("Favourite drink: seltzer");
    noteListView = new NoteListView(noteList);
      expect(noteListView.html()).toEqual(
        "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
      );
  })

})
