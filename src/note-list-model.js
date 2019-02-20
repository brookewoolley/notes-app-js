(function(exports) {

  function NotesList() {
    this.notes = [];
  };

  NotesList.prototype.addNote = function(text) {
    var note = new Note(text)
    this.notes.push(note)
  };

  NotesList.prototype.returnNotesList = function() {
    return this.notes;
  };

  exports.NotesList = NotesList;

})(this);
