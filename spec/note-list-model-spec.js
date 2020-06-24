describe("NoteList", () => {

  beforeEach(() => {
    noteList = new NoteList;
  })


  it("has will return the note models stored in the array", () => {
    expect(noteList.all()).toEqual([])
  })

  // it("creates a note and adds it to the list", () => {
  //   noteList.create("Note 1");
  //   expect(NoteList.all[0].text).toEqual(["Note 1"])
  // })
})
