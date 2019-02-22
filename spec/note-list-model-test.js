function testNotesList(){
  var note1 = new Note("My favourite language is JavaScript");
  var note2 = new Note("My favourite language is Ruby");
  var note3 = new Note("My favourite language is Python");
  var noteList = new NotesList();
  let testArray = [note1, note2, note3]
  noteList.addNote(note1);
  noteList.addNote(note2);
  noteList.addNote(note3);
  console.log("Testing for array length: " + assert.isTrue(noteList.notes.length === 3));
  let array = noteList.returnNotesList()
  array.forEach(function(note, index) {
    if(!(note.printNote() === array[index].printNote())) {
      console.log('fuck')
    } else {
      console.log('no fucks given! (test passed)')
    }
  })
};

testNotesList();
