'use strict';

var readLine = require('readline');
var rl = readLine.createInterface(process.stdin, process.stdout);
var fs = require('fs');

var realPerson = {
    name: '',
    sayings: []
};

rl.question('What is your name of real person?', function(answer) {
    realPerson.name = answer;

    fs.writeFileSync(realPerson.name + '.md', `${realPerson.name}\n===========\n\n`);

    rl.setPrompt(`What would ${realPerson.name} say?`);

    rl.prompt();

    rl.on('line', function(saying) {
        realPerson.sayings.push(saying);

        fs.appendFileSync(realPerson.name + '.md', `* ${saying.trim()} \n`);

        if (saying.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
            rl.prompt();
        }
    });
});