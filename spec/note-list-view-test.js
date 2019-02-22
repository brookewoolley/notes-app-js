function testView() {
  var noteListTest = new NotesList();
  noteListTest.addNote("Hello");
  noteListTest.addNote("Goodbye");
  var newview = new ViewNoteList(noteListTest);
  console.log("Testing for display: " + assert.isTrue(newview.printNotes()
  === ("<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>")));
}

testView();
