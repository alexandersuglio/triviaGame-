// var right = [],
//     wrong = [],
//     userCounter = 0;

var correctTally = 0,
    wrongTally = 0;


// $("#quizBody").hide();

// $(".beginButton").click(function(e){
// e.preventDefault();
// $("#quizBody").show();
// });


$("#quizBody").hide();

$(".beginButton").click(function(e) {
    e.preventDefault();
    $("#quizBody").show();
    $(".beginButton").hide();
});



$("#result").hide();

$(".submitButton").click(function(e) {
    e.preventDefault();
    $("#result").show();
    $(".submitButton").hide();
});



$("#answerA").one("click", function() {
    correctTally++;


    // console.log(correctTally);
    $("#correctFinal").text(correctTally);


});

$("#answerB, #answerC, #answerD").one("click", function() {
    wrongTally++;
    $("#wrongFinal").text(wrongTally);

});


$("#answerC_ii").one("click", function() {
    correctTally++;

    $("#correctFinal").text(correctTally);

});

$("#answerA_ii, #answerB_ii, #answerD_ii").one("click", function() {
    wrongTally++;
    $("#wrongFinal").text(wrongTally);
});


$("#answerD_iii").one("click", function() {
    correctTally++;
    $("#correctFinal").text(correctTally);

});

$("#answerA_iii, #answerB_iii, #answerC_iii").one("click", function() {
    wrongTally++;
    $("#wrongFinal").text(wrongTally);
});

$("#answerC_iv").one("click", function() {
    correctTally++;
    $("#correctFinal").text(correctTally);

});

$("#answerA_iv, #answerB_iv, #answerD_iv").one("click", function() {
    wrongTally++;
    $("#wrongFinal").text(wrongTally);

});

$("#answerB_v").one("click", function() {
    correctTally++;
    $("#correctFinal").text(correctTally);


});

$("#answerA_v, #answerC_v, #answerD_v").one("click", function() {
    wrongTally++;
    $("#wrongFinal").text(wrongTally);

});
