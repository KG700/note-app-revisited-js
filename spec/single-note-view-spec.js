describe('SingleNoteView', () => {

  beforeEach(() => {
    note = new Note("Favourite drink: seltzer")
    singleNoteView = new SingleNoteView(note);
  })

  it('returns the html string for a single note', () => {
    expect(singleNoteView.html()).toEqual('<div>Favourite drink: seltzer</div>')
  })

})
