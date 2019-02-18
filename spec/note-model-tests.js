  function testNote(){
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.printNote() === "My favourite language is JavaScript");
  };

  testNote();
