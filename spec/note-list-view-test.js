function testView() {
  var note1 = new Note("Hello");
  var note2 = new Note("Goodbye");
  var noteListTest = new NotesList();
  let testArray = [note1, note2]
  noteListTest.addNote(note1);
  noteListTest.addNote(note2);
  var newview = new ViewNoteList(noteListTest);
  console.log("Testing for display: " + assert.isTrue(newview.printNotes()
  === ("<ul><li><div>" + note1 + "</div></li><li><div>" + note2
  + "</div></li></ul>")));

}

testView();
