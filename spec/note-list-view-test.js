function testView() {
  var noteListTest = new NotesList();
  noteListTest.addNote("Hello");
  noteListTest.addNote("Goodbye");
  noteListTest.addNote("This is a longer note to test for 20 char limit!")
  var newview = new ViewNoteList(noteListTest);
  console.log("Testing for display: " + assert.isTrue(newview.printNotes()
  === ("<ul><li><div><a href='#notes/8'>Hello</a></div></li><li><div><a href='#notes/9'>Goodbye</a></div></li><li><div><a href='#notes/10'>This is a longer not</a></div></li></ul>")));
}

testView();
