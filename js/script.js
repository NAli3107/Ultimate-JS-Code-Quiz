// Variable in global memory
let index = 0;
let totalTime = 100;
let timeCountdown;
const highScore = 100;
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("render-questions");
const finalScore = document.getElementById("final-score");
const highScoreTrigger = document.getElementById("high-score");
let timeElement = document.getElementById("timer");
const showQuestions = document.createElement("h2");
let listAnswerOptions = document.createElement("ul");
let option1 = document.createElement("li");
let option2 = document.createElement("li");
let option3 = document.createElement("li");
let option4 = document.createElement("li");
let answer1 = document.createElement("button");
let answer2 = document.createElement("button");
let answer3 = document.createElement("button");
let answer4 = document.createElement("button");


//function to remove the introductory page
function removeIntroPage() {
    let removeIntro = document.getElementById("intro-page");
        removeIntro.remove();
}

//function to render questions
function renderQuestions() {
    showQuestions.innerText = questionsArray[index].question;
    if (questionsArray[index] !==4) {
                   
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
    else {
        displayScore();
    }
};



function showResult() {

    let correctAnswer = document.createElement("h3");
    let wrongAnswer = document.createElement("h3");
    correctAnswer.textContent = "Well done! That's correct!";
    wrongAnswer.textContent = "Sorry, that's incorrect!";
    
    if (this.textContent === questionsArray[index].answer) {
        questionElement.appendChild(correctAnswer);
        setTimeout(function() {
            questionElement.innerHTML = "";
            index++;
            if (index === questionsArray.length) {
              displayScore();
      
            }
            else {
      
              renderQuestions()
            }
          }, 1000)
        
    } 
    else {
        questionElement.appendChild(wrongAnswer)
        
        if (totalTime >= 10) {
            totalTime = totalTime -10;
        }
        timeElement.textContent = totalTime;

        /* add logic about removing 10 points from high score*/

        renderQuestions()
        }
};

function startTimer() {
    timeCountdown = setTimeout(function() {
        totalTime --;
        timeElement.textContent = totalTime;
        if (totalTime <= 0) {
        displayScore();
        }
    }, 1000);    
    
} 

function displayScore() {
    finalScore.textContent = highScore;
    clearInterval(timeCountdown);
    form.style.display = "block";
};


// When the START button is clicked
function startQuiz() {
    // calling function to remove the intro page
    removeIntroPage();

    // render questions
    renderQuestions();

    //call function to start timer here
    startTimer();

    return;
}

// Event listener for START button to trigger the commencement of the quiz
startButton.addEventListener("click", startQuiz);


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

/* Setting attributes for createdElements */
showQuestions.setAttribute("id", "questions-container")
listAnswerOptions.setAttribute("id", "list-container")
option1.setAttribute("class", "options-containers");
option2.setAttribute("class", "options-containers");
option3.setAttribute("class", "options-containers");
option4.setAttribute("class", "options-containers");
answer1.setAttribute("class", "answers-button");
answer2.setAttribute("class", "answers-button");
answer3.setAttribute("class", "answers-button");
answer4.setAttribute("class", "answers-button");


/*Next steps:
    1) Start the timer
    2) Render Questions
    3) Function to verify answers
    4) Function to render score
    5) register score in local storage 
    6) create and link high score html
    7) render highscore */

/*Help:

1) when start button clicked the timer starts but doesn't continue decrementing
2) if wrong answer selected doesn't automatically switch to next question
3) message for wrong answer appears at the top
4) when i submit initials doesnt go to highscore page
5) highscore page doesnt allow css style changes

*/