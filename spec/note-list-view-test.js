function testView() {
  var note1 = new Note("Hello");
  var note2 = new Note("Goodbye");
  var noteListTest = new NotesList();
  noteListTest.addNote(note1);
  noteListTest.addNote(note2);
  var newview = new ViewNoteList(noteListTest);
  console.log("Testing for display: " + assert.isTrue(newview.printNotes(noteListTest) === ("<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>")));

}

testView();
