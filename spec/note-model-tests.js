  function testNote(){
    var note = new Note("My favourite language is JavaScript");
    var note2 = new Note("Testing for note IDs");
    console.log("Testing for a note: " + assert.isTrue(note.printNote() === "My favourite language is JavaScript"));
    console.log("Testing for a note ID 0: " + assert.isTrue(note.returnID() === 0));
    console.log("Testing for a note ID 1: " + assert.isTrue(note2.returnID() === 1));
  };

  testNote();
