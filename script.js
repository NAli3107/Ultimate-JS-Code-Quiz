// Global Memory - variables
let index = 0;
const startButton = document.getElementById("start-button")
// const introPage = document.querySelector("#intro-page")




// Array object with quiz questions, options and answers
let questionsArray = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<js>", "<scripting>", "<javascript>"],
        answer: "<script>"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <head> section", "The <body> section", "Both the <head> and the <body> section are correct."],
        answer: "The <body> section"
    },

    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "function:myFunction()"],
        answer: "function = myFunction()"
    },

    {
        question: "How does a WHILE loop start?",
        options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)"],
        answer: "while (i <= 10)"
    },

    {
        question: "How do you round the number 7.25 to the nearest integer?",
        options: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"],
        answer: "Math.round(7.25)"
    }
];


// When the START button is clicked
function startQuiz() {

    if (index === 0) {
        let removeIntro = document.getElementById("intro-page");
        removeIntro.remove();
    }




}

// Event listener for START button to trigger the commencement of the quiz
startButton.addEventListener("click", startQuiz);