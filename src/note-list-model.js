(function(exports) {

  function NotesList() {
    this.notes = [];
  };

  NotesList.prototype.addNote = function(text) {
    this.notes.push(text)
  };

  NotesList.prototype.returnNotesList = function() {
    return this.notes;
  };

  exports.NotesList = NotesList;

})(this);
