'use strict';

(function(exports) {

  function Controller(notesList) {
    this.notesView = new ViewNoteList(notesList)
  }

  Controller.prototype.printResults = function() {
    let results = this.notesView.printNotes()
    return this.HTML().innerHTML = results
  }

  Controller.prototype.HTML = function() {
    return document.getElementById('app')
  }

  exports.Controller = Controller

})(this);

let test = new NotesList()

let controller = new Controller(test);
controller.printResults()
