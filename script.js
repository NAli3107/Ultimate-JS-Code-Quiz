// Variable in global memory
const index = 0;
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("render-questions");
const showQuestions = document.createElement("h2");
showQuestions.setAttribute("id", "questions-container")
let listAnswerOptions = document.createElement("ul");
listAnswerOptions.setAttribute("id", "list-container")
let option1 = document.createElement("li");
let option2 = document.createElement("li");
let option3 = document.createElement("li");
let option4 = document.createElement("li");
option1.setAttribute("class", "options-containers");
option2.setAttribute("class", "options-containers");
option3.setAttribute("class", "options-containers");
option4.setAttribute("class", "options-containers");
let answer1 = document.createElement("button");
let answer2 = document.createElement("button");
let answer3 = document.createElement("button");
let answer4 = document.createElement("button");
answer1.setAttribute("class", "answers-button");
answer2.setAttribute("class", "answers-button");
answer3.setAttribute("class", "answers-button");
answer4.setAttribute("class", "answers-button");

//function to remove the introductory page
function removeIntroPage () {
    let removeIntro = document.getElementById("intro-page");
        removeIntro.remove();
}
//function to render questions
function renderQuestions () {
    showQuestions.innerText = questionsArray[index].question;
    if (questionsArray[index] !==4) {
        
        //questionElement.appendChild(questionsArray[index].question)
        //question not loading
        console.log(questionsArray[index].question);
        
        answer1.textContent = questionsArray[index].options[0];
        answer2.textContent = questionsArray[index].options[1];
        answer3.textContent = questionsArray[index].options[2];
        answer4.textContent = questionsArray[index].options[3];
        
        option1.appendChild(answer1);
        option2.appendChild(answer2);
        option3.appendChild(answer3);
        option4.appendChild(answer4);
        
        listAnswerOptions.appendChild(option1);
        listAnswerOptions.appendChild(option2);
        listAnswerOptions.appendChild(option3);
        listAnswerOptions.appendChild(option4);
        
        questionElement.appendChild(showQuestions);
        questionElement.appendChild(listAnswerOptions);

        answer1.addEventListener("click", showResult);
        answer2.addEventListener("click", showResult);
        answer3.addEventListener("click", showResult);
        answer4.addEventListener("click", showResult);
    }

};

// Array object with quiz questions, options and answers
let questionsArray = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<js>", "<scripting>", "<javascript>"],
        answer: "<script>"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <head> section", "The <body> section", "Both the <head> and the <body> section are correct.", "Neither>"],
        answer: "The <body> section"
    },

    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "(myFunction) = function"],
        answer: "function = myFunction()"
    },

    {
        question: "How does a WHILE loop start?",
        options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while i is = 10"],
        answer: "while (i <= 10)"
    },

    {
        question: "How do you round the number 7.25 to the nearest integer?",
        options: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"],
        answer: "Math.round(7.25)"
    },
];

function showResult() {
    let correctAnswer = document.createElement("h2");
    let wrongAnswer = document.createElement("h2");
    correctAnswer.textContent = "Well done! That's correct!";
    wrongAnswer.textContent = "Sorry, that's incorrect!";
    
    if (this.textContent === questionsArray[index].answer) {
        questionElement.appendChild(correctAnswer);
        
    } else {
        questionElement.appendChild(wrongAnswer)
        /*the user selection the wrong answer      
        subtract 10 for time
        if (timecountdown >= 10) {
        timecountdown = timecountdown - 10;
      */
        }
}


// When the START button is clicked
function startQuiz() {
    // calling function to remove the intro page
    removeIntroPage();

    // render questions
    renderQuestions();
//call function to start timer here

    return;
}

// Event listener for START button to trigger the commencement of the quiz
startButton.addEventListener("click", startQuiz);

/*Next steps:
    1) Start the timer
    2) Render Questions
    3) Function to verify answers
    4) Function to render score
    5) register score in local storage 
    6) create and link high score html
    7) render highscore */
