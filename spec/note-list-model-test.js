function testNotesList(){
  var note1 = new Note("My favourite language is JavaScript");
  var note2 = new Note("My favourite language is Ruby");
  var note3 = new Note("My favourite language is Python");
  var noteList = new NotesList();
  noteList.addNote(note1);
  noteList.addNote(note2);
  noteList.addNote(note3);
  assert.isTrue(noteList.notes.length === 3);
// create test to return values of array

};

testNotesList();
