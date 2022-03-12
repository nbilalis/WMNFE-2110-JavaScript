'use strict';

const DEBUG = false;

// Another constructor function for a custom 'Warning' object
function Warning(message) {
  this.prefix = 'ΠΡΟΣΟΧΗ: ';
  this.message = message;

  this.show = function () {
    if (DEBUG) {
      console.warn(`${this.prefix}: ${this.message}!!!`);
    }
  };
}

let warn1 = new Warning('Winter is coming');
warn1.show();

let warn2 = new Warning('You know nothing Jon Snow');
warn2.show();
