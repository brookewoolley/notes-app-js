function testSingleNoteView(){

  let note = new Note("Greetings")
  let singleNote = new SingleNoteView(note)
  console.log("Testing for a single note view: " + assert.isTrue(singleNote.formatHTMLNote() === "<div>Greetings</div>"));
};

testSingleNoteView()
