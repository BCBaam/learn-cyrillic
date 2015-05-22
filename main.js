"use strict";

var correct_answer_index;
var correct_count = 0;
var mistake_count = 0;

var alphabet = [
["А а", "a"],
["Б б", "b"],
["В в", "v"],
["Г г", "g"],
["Д д", "d"],
["Е е", "je"],
["Ё ё", "jo"],
["Ж ж", "ž"],
["З з", "z"],
["И и", "i"],
["Й й", "ji"],
["К к", "k"],
["Л л", "l"],
["М м", "m"],
["Н н", "n"],
["О о", "o"],
["П п", "p"],
["Р р", "r"],
["С с", "s"],
["Т т", "t"],
["У у", "u"],
["Ф ф", "f"],
["Х х", "h"],
["Ц ц", "ts"],
["Ч ч", "tš"],
["Ш ш", "š"],
["Щ щ", "štš"],
["Ъ ъ", "Kova merkki"],
["Ы ы", "y, taka-i"],
["Ь ь", "Liudennus"],
["Э э", "e"],
["Ю ю", "ju"],
["Я я", "ja"]
];

var button_pushed = function (id) {
    var wait = 1500;
    if (correct_answer_index == id) {
        correct_count++;
        $('#'+id).attr('class', 'btn btn-success');
        wait = 300;
    } else{
        mistake_count++;
        $('#'+id).attr('class', 'btn btn-danger');
        $('#'+correct_answer_index).attr('class', 'btn btn-success');
    }
    score_increment();
    setTimeout(draw_question, wait);
};

function clear_buttons() {
    $('#answer_buttons button').attr('class', 'btn btn-default');
} 

function draw_question() {
    clear_buttons();
    $('#question').empty();
    correct_answer_index = Math.floor(Math.random() * alphabet.length);
    $('<p>')
        .text(alphabet[correct_answer_index][0])
        .appendTo('#question');
}

function score_increment() {
    $("#correct_count").html(correct_count);
    $("#mistake_count").html(mistake_count);
}

function reset_counter() {
    correct_count = 0;
    mistake_count = 0;
    score_increment();
    draw_question();
}

function create_answer_buttons() {
    for (var i = 0; i < alphabet.length; i++) {
        $('<button>')
        .attr('type', 'button')
        .attr('class', 'btn btn-default')
        .attr('id', i)
        .text(alphabet[i][1])
        .appendTo('#answer_buttons')
        .click(function(){
            button_pushed(this.id);
        });
    }
}

$(document).ready(function(){
    score_increment();
    draw_question();
    create_answer_buttons();
    //Create reset button
    $('#reset_score')
    .text("Reset score")
    .click(function(){
        reset_counter();
    });

});


