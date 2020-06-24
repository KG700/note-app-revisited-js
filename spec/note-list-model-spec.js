describe("NoteList", () => {

  beforeEach(() => {
    noteList = new NoteList;
  })

  it("has will return an empty array array of notes when initialised", () => {
    expect(noteList.all()).toEqual([])
  })

  it("creates a note and adds it to the list", () => {
    noteList.create("Note 1");
    expect(noteList.all()[0].text).toEqual("Note 1")
  })
})
