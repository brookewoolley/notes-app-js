(function(exports) {
  function ViewNoteList(noteList) {
    this.noteList = noteList
  };

  ViewNoteList.prototype.printNotes = function() {
    html = ["<ul>"]
    for (var i = 0; i < this.noteList.returnNotesList().length; i++) {
      html.push("<li><div>" + this.noteList.returnNotesList()[i].printNote() + "</div></li>");
    }
    return (html.join('') + "</ul>")
  };

  exports.ViewNoteList = ViewNoteList;

})(this);
