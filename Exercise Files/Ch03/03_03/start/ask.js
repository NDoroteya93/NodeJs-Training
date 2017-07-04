'use strict';

var questions = [
    "What is your name?",
    'What is your favorite hoby?',
    'What is you preferred programming language?'
];

var answer = [];

function ask(i) {

    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write("  >  ");

}

process.stdin.on('data', function(data) {
    //  process.stdout.write('\n' + data.toString().trim() + '\n'); // print to the next line

    answer.push(data.toString().trim());

    if (answer.length < questions.length) {
        ask(answer.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {

    process.stdout.write('\n\n\n\n');

    process.stdout.write(`Go ${answer[1]} ${answer[0]} you can finish writing ${answer[2]}`);

    process.stdout.write('\n\n\n\n');
});

ask(0);