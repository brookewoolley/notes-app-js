(function(exports) {

  var idGenerator = 0

  function Note(text) {
    this.text = text;
    this.id = idGenerator;
    idGenerator++;
  };

  Note.prototype.printNote = function() {
    return this.text;
  };

  Note.prototype.returnID = function() {
    return this.id;
  };

  exports.Note = Note;

})(this);
