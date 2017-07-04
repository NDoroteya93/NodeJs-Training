'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');
var Person = function(name) {
    this.name = name;
}

// Person object inherit all functionality on EventEmitter
util.inherits(Person, EventEmitter);

module.exports = Person;