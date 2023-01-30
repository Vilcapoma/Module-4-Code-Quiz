//Var defintions
var startQuiz = document.querySelector("#start");
var beginQuiz = document.querySelector("#Begin-quiz");
var timer = document.querySelector("#timer-begins");
var choices = document.querySelector("#multiple-choice");
var questions = document.querySelector("question-given");
var answer1 = document.querySelector("#answer_btn1");
var answer2 = document.querySelector("#answer_btn2");
var answer3 = document.querySelector("#answer_btn3");
var answer4 = document.querySelector("#answer_btn4");
var  score = 0
var timeLeft = 60;
var enterScore = document.querySelector("enter-score");

var quizTestQuestions = [ {
    question: "What does DOM stand for?",
    answer1: "Display Object Matter",
    answer2: "Desktop Oriented Mode",
    answer3: "Document Object Model",
    answer4: "Document Ordinance Model",
    correctAnswer: "c"
},
{
    question: "which property references the DOM onject that dispatched an event?",
    answer1: "self",
    answer2: "target",
    answer3: "source",
    answer4: "object",
    correctAnswer: "b"

},
{
    question: "What is the file name that adds style to a webpage?",
    answer1: "Python",
    answer2: "HTML",
    answer3: "C#",
    answer4: "CSS",
    correctAnswer: "d"
},
{
    question: "What is the proper way to right an array in Javascript?",
    answer1: "['pizza', 'burger', 'lettuce']",
    answer2: "('pizza,'burger', 'lettuce')",
    answer3: "[pizza, burger, lettuce]",
    answer4: "(pizza, burger, lettuce)",
    correctAnswer: "a"
},
{
    question: "Which one of these stands for the Addition Assignment Operator?",
    answer1: "!=",
    answer2: "==",
    answer3: "+=",
    answer4: "*=",
    correctAnswer: "c"
}
];

function countDown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent ='Time: ' + timeLeft;
            timeLeft--;
        } else {
            timer.textContent = 'Time: ' + '0';
            clearInterval(timeInterval);
            endQuiz();
        }
    },1000)
};

var commenseQuiz = function() {
    countDown();
    startQuiz.setAttribute("style", "display: none;");
    choices.setAttribute("style", "display: intitial");

    for (i=0; i <quizTestQuestions.length; i++) {
        questions.textContent = quizTestQuestions[i].question;
        answer1.textContent = quizTestQuestions[i].choices[0];
        answer2.textContent = quizTestQuestions[i].choices[1];
        answer3.textContent = quizTestQuestions[i].choices[2];
        answer4.textContent = quizTestQuestions[i].choices[3];

        if (answer1.textContent === quizTestQuestions.correctAnswer) {
            console.log("no");
        } else if (answer2.textContent === quizTestQuestions.correctAnswer) {
            console.log("no");
        } else if (answer3.textContent === quizTestQuestions.correctAnswer) {
            console.log("no");
        } else if (answer4.textContent === quizTestQuestions.correctAnswer) {
            console.log("no");
        } else {
            console.log("didn't work");
        }
    }
};

var finishedQuiz = function () {
    var done = document.querySelector("#all-done");
    var finalScore = document.querySelector("#final-score");
    var name = document.querySelector("#initials");
    
    done.textContent = "Completed!"
    finalScore.textContent = "Congratulation your final score is " + score
    name.textContent = "Enter initials: "
};

var saveScore = function() {
    var signature = document.querySelector("#sign");
    var user = {
        sign: signature,
        highScore: score
    }
    localStorage.setItem("highscores", JSON.stringify(user));
};
var giveScore = function() {

};

beginQuiz.addEventListener("click", startQuiz);