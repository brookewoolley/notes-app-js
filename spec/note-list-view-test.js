function testView() {
  var noteListTest = new NotesList();
  noteListTest.addNote("Hello");
  noteListTest.addNote("Goodbye");
  noteListTest.addNote("This is a longer note to test for 20 char limit!")
  var newview = new ViewNoteList(noteListTest);
  console.log("Testing for display: " + assert.isTrue(newview.printNotes()
  === ("<ul><li><div>Hello</div></li><li><div>Goodbye</div></li><li><div>This is a longer not</div></li></ul>")));
}


testView();
