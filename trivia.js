var correctTally,
    wrongTally,
    totalQuestions,
    finalGrade;

var countSec = 50;

$(".beginButton").one("click", function() {

    var counterSec = setInterval(timer4sec, 1000);

    function timer4sec() {

        countSec = countSec - 1;
        if (countSec <= 0) {
            alert("Out of time!");
            location.reload();
        }
        document.getElementById("timerDataHereSec").innerHTML = countSec + " sec ";
    };
    if (
        $(".submitButton").click(function() {
            clearInterval(counterSec);
        })
    );
});

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

function quizQuestions() {

    var correctTally = 0,
        wrongTally = 0,
        totalQuestions = 5;


    $("#answerA").one("click", function() {
        correctTally++;
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
        finalGrade = correctTally / totalQuestions * 100;
        $("#percentageShow").text("You know " + finalGrade + "% about Gator Football");

    });

    $("#answerA_v, #answerC_v, #answerD_v").one("click", function() {
        wrongTally++;
        $("#wrongFinal").text(wrongTally);
        finalGrade = correctTally / totalQuestions * 100;
        $("#percentageShow").text("You know " + finalGrade + "% about Gator Football");
        // console.log(correctTally);
    });


};

quizQuestions();
