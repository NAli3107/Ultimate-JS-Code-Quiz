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