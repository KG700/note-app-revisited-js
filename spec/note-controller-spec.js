describe("NoteController", () => {

  beforeEach(() => {
    controller = new NoteController;

  })

  it("can be instantiated", () => {
    expect(new NoteController).toBeDefined();
  })

  // Create a test using selenium instead: https://github.com/makersacademy/course/blob/master/pills/js_acceptance_tests.md
  // it("updates innerHTML of the app element to note list view", () => {
  //   const div = document.createElement('div');
  //   div.id = 'app';
  //   div.innerHTML = "<ul><li><div>Favourite food: pesto</div></li></ul>"
  //
  //   expect(controller.createView()).toEqual(div);
  //   // expect(controller.createView()).toEqual("<ul><li><div>Favourite food: pesto</div></li></ul>");
  // })

})
