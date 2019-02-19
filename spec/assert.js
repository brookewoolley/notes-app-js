var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      return ("Test failed")}
      else {
        return ("Test passed");
      };
    }
  // },

  // isEqual: function(assertionToCheck, assertionToCheckAgainst) {
  //   if (assertionToCheck === assertionToCheckAgainst) {
  //     throw new Error("Assertion failed: " + assertionToCheck + " is not equal");
  //   }
  // }
};
