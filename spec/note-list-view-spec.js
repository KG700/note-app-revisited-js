describe("NoteListView", () => {

  beforeEach(() => {
    noteList = new NoteList;
  })

  it("returns an empty string when the note list is empty", () => {
    noteListView = new NoteListView(noteList);
    expect(noteListView.html()).toEqual("")
  })

  it("returns an html list string with one item when the note list has one item", () => {
    noteList.create("Favourite food: rice");
    noteListView = new NoteListView(noteList);
      expect(noteListView.html()).toEqual(
        "<ul><li><div>Favourite food: rice</div></li></ul>"
      );
  })

  it("returns an html list string with two item when the note list has two items", () => {
    noteList.create("Favourite food: rice");
    noteList.create("Favourite drink: pop");
    noteListView = new NoteListView(noteList);
    expect(noteListView.html()).toEqual(
      "<ul><li><div>Favourite food: rice</div></li><li><div>Favourite drink: pop</div></li></ul>"
    );
  })

  it("only displays the first 20 characters of each note", () => {
    noteList.create("Pick up the cat from the vet");
    noteListView = new NoteListView(noteList);
    expect(noteListView.html()).toEqual(
      "<ul><li><div>Pick up the cat from</div></li></ul>"
    );
  })

})
