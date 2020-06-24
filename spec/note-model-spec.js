describe("Note", () => {

  beforeEach(() => {
    note = new Note("This is a note");
  })

  it("can return a note text", () => {
    expect(note.getText()).toEqual("This is a note")
  })

})
