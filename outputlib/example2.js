"use strict";

var person = {
  personName: "person",
  personAge: "18",
  personGender: "male",
  log: function log() {
    console.log("personName: " + this.personName);
    console.log("personAge: " + this.personAge);
    console.log("personGender: " + this.personGender);
  }
};