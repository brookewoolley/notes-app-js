(function(exports) {
  function ViewNoteList(notelist) {
  };

  ViewNoteList.prototype.printNotes = function(notelist) {
    html = "<ul>"
    for (var i = 0; i < notelist.returnNotesList().length; i++) {
      html += ("<li><div>" + notelist.returnNotesList()[i].printNote() + "</div></li>");
    }
    return html + "</ul>"
  };


  exports.ViewNoteList = ViewNoteList;

})(this);
