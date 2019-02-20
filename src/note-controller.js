'use strict';

(function(exports) {

  function Controller(notesList) {
    notesList.addNote('Favourite drink: seltzer')
    this.notesView = new ViewNoteList(notesList)
  }

  Controller.prototype.printResults = function() {
    let results = this.notesView.printNotes()
    document.getElementById('app').innerHTML = results
  }

  exports.Controller = Controller

})(this);

let test = new NotesList()

let controller = new Controller(test);
controller.printResults()
