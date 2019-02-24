function checkingInnerHTML() {
  var notesList = new NotesList();
  var controller = new Controller(notesList);
  notesList.addNote('Favourite drink: seltzer');
  var newview = new ViewNoteList(notesList);

  controller.HTML = function() {
    var result = document.createElement("div");
    return result
  }

  console.log("Mocking for innerHTML property: " + assert.isTrue(controller.printResults()
  === "<ul><li><div><a href='#notes/11'>Favourite drink: sel</a></div></li></ul>"));
};

checkingInnerHTML();
