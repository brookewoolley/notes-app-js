(function(exports) {
  function ViewNoteList(notelist) {
  };

  ViewNoteList.prototype.printNotes = function(notelist) {
    for (var i = 0; i < notelist.returnNotesList().length; i++) {
      console.log("<li><div>" + notelist.returnNotesList()[i].printNote() + "</div></li>");
    }
  };

  exports.ViewNoteList = ViewNoteList;

})(this);
