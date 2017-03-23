var right = 0,
    wrong = 0,
    userCounter= 0;


// function question1() {

//     $("#answerA").one("click", function() {
//         right++;

//         // console.log("right");
//         // console.log(right);

//     });

//     $("#answerB, #answerC, #answerD").one("click", function() {
//         wrong++;
//         // console.log("wrong");
//         // console.log(wrong);
//     });


// };

// question1();

// function question2() {

//     $("#answerC_ii").one("click", function() {
//         right++;

//         // console.log("right");
//     });

//     $("#answerA_ii, #answerB_ii, #answerD_ii").one("click", function() {

//         // console.log("wrong");
//         wrong++;
//     });

// };

// question2();

// function question3() {

//     $("#answerD_iii").one("click", function() {
//         right++;

//         // console.log("right");
//     });

//     $("#answerA_iii, #answerB_iii, #answerC_iii").one("click", function() {
//         wrong++;
//         // console.log("wrong");
//     });

// };

// question3();

// function question4() {

//     $("#answerC_iv").one("click", function() {
//         right++;

//         // console.log("right");
//     });

//     $("#answerA_iv, #answerB_iv, #answerD_iv").one("click", function() {
//         wrong++;
//         // console.log("wrong");
//     });

// };

// question4();

$("#answerA").one("click", function() {
        right++;
       var correctTally = userCounter + right;
       console.log(correctTally);

        // console.log("right");
        // console.log(right);

    });

    $("#answerB, #answerC, #answerD").one("click", function() {
        wrong++;
        var wrongTally = userCounter + wrong;
        console.log(wrongTally);
        // console.log("wrong");
        // console.log(wrong);
    });


$("#answerC_ii").one("click", function() {

        right++;
          var correctTally = userCounter + right;
       console.log(correctTally);


        // console.log("right");
    });

    $("#answerA_ii, #answerB_ii, #answerD_ii").one("click", function() {

        // console.log("wrong");
        wrong++;
         var wrongTally = userCounter + wrong;
        console.log(wrongTally);
    });


$("#answerD_iii").one("click", function() {
        right++;
        var correctTally = userCounter + right;
       console.log(correctTally);


        // console.log("right");
    });

    $("#answerA_iii, #answerB_iii, #answerC_iii").one("click", function() {
        wrong++;
            var wrongTally = userCounter + wrong;
        console.log(wrongTally);
        // console.log("wrong");
    });

$("#answerC_iv").one("click", function() {
        right++;
        var correctTally = userCounter + right;
       console.log(correctTally);


        // console.log("right");
    });

    $("#answerA_iv, #answerB_iv, #answerD_iv").one("click", function() {
        wrong++;
            var wrongTally = userCounter + wrong;
        console.log(wrongTally);
        // console.log("wrong");
    });

 $("#answerB_v").one("click", function() {
        right++;
       var correctTally = userCounter + right;
       console.log(correctTally);


        // console.log(right);
    });

    $("#answerA_v, #answerC_v, #answerD_v").one("click", function() {
        wrong++;
            var wrongTally = userCounter + wrong;
        console.log(wrongTally);
        // console.log("wrong");
        // console.log(wrong);
    });

    // console.log(right);
    // console.log(wrong);

$("#rightFinal").text(correctTally);
$("#wrongFinal").text(wrongTally);

// function question5() {

//     $("#answerB_v").one("click", function() {
//         right++;

//         // console.log(right);
//     });

//     $("#answerA_v, #answerC_v, #answerD_v").one("click", function() {
//         wrong++;
//         // console.log("wrong");
//         // console.log(wrong);
//     });

// };

// question5();

// function total() {
//     console.log(right);
//     console.log(wrong);
// };

// total();
