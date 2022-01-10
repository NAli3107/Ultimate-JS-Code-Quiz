# Ultimate-JS-Code-Quiz

Notes


- Click on START button 
    - start the timer - could be Eventlistener('click')
    - render the first question on the page

- When user clicks an answer    
    - check if the chosen answer is correct - could use if else statements with boolean
        - if answer is wrong then time is subtracted from remaining time - could use (count-- syntax)
        - if answer is correct then render next question

- Last question of end of time then display score

STEPS:

1) HTML file - index.HTML
    - header - flex container
    - inside header will be two divs (flex items use space between) - first div has anchor tags with
    href link to show you high score link. second page will have timer - number needs to wrapped inside span (timer value that will change) give it #timer id
    - div with h1, p tag and another div with a button
    - button (required id #start-button) will need click event and a function to remove div (startQuiz)
    - div needs id #start-container

    - startQuiz functions needs to remove div, start timer and render question

    - questions need to be stored as an object array
    - questions need to be created in JS
    - question needs to be a div (requires an id #question-container) - answers are buttons - will have click event and function (checkAnswer)
    - only need if block to check answer and deduct time
    - dont neeed else block because whether its right or wrong you need to render the question anyway

only introduction page made on html - everything else made on JS

- Quiz questions

1) Inside which HTML element do we put the JavaScript?
    a) <script>
    b) <js>
    c) <scripting>
    d) <javascript>

2) Where is the correct place to insert a JavaScript?
    a) The <head> section
    b) The <body> section
    c) Both the <head> and the <body> section are correct.

3) How do you create a function in JavaScript?
    a) function = myFunction()
    b) function myFunction()
    c) function:myFunction()

4) How does a WHILE loop start?
    a) while (i <= 10)
    b) while i = 1 to 10
    c) while (i <= 10; i++)

5) How do you round the number 7.25 to the nearest integer?
    a) Math.round(7.25)
    b) rnd(7.25)
    c) Math.rnd(7.25)
    d) round(7.25)