  function testNote(){
    var note = new Note("My favourite language is JavaScript");
    console.log("Testing for a note: " + assert.isTrue(note.printNote() === "My favourite language is JavaScript"));
  };

  testNote();
