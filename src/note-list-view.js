(function(exports) {
  function ViewNoteList(noteList) {
    this.noteList = noteList
  };

  ViewNoteList.prototype.printNotes = function() {
    var html = "<ul>"
    for (var i = 0; i < this.noteList.returnNotesList().length; i++) {
      // debugger
      html += ("<li><div>" + this.noteList.returnNotesList()[i].printNote() + "</div></li>");
    }
    return html + "</ul>"
  };

  exports.ViewNoteList = ViewNoteList;

})(this);
