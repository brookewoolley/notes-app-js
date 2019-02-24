'use strict';

(function(exports) {

  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.formatHTMLNote = function(note) {
    let array = []
    array.push(this.note.text);
    array.unshift('<div>');
    array.push('</div>');
    return array.join("");
  }

  exports.SingleNoteView = SingleNoteView

})(this);
