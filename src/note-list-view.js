(function(exports) {
  function ViewNoteList(noteList) {
    this.noteList = noteList
  };

  ViewNoteList.prototype.printNotes = function() {
    html = ["<ul>"]
    for (var i = 0; i < this.noteList.returnNotesList().length; i++) {
      let noteText = this.noteList.returnNotesList()[i].printNote().slice(0, 20);
      let id = this.noteList.returnNotesList()[i].returnID();
      html.push(`<li><div><a href='#notes/${id}'>${noteText}</a></div></li>`);
    }
    return (html.join('') + "</ul>")
  };

  exports.ViewNoteList = ViewNoteList;

})(this);
