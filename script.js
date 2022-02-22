difficulties_button = document.querySelectorAll(".difficulty");
start_button = document.querySelector(".start");

difficulty_container = document.querySelector(".difficulty_container");
tuto_container = document.querySelector(".tuto_container");
game_container = document.querySelector(".game_container");

question_content = document.querySelector("#question_content");
propositions_content = document.querySelectorAll(".proposition");

function generateQuestion(operators, min, max) {
    let number1 = Math.floor(Math.random() * (max - min + 1) + min);
    let number2 = Math.floor(Math.random() * (max - min + 1) + min);

    let operator = operators[Math.floor(Math.random() * operators.length)];
    let question = `${number1} ${operator} ${number2}`;
    let answer = eval(question);

    if (answer <= 0 || answer % 1 !== 0) {
        return generateQuestion(operators, min, max);  
    }
    
    return [question, answer];  
}


function generatePropositions(answer) {
    
    
}

function startGame(operators, min, max) {

    [question, answer] = generateQuestion(operators, min, max);

    propositions = generatePropositions(answer)

    question_content.innerHTML = question;

    console.log(propositions);
    console.log(answer);

}

function setGameOptions(difficulty) {
    if (difficulty === "1") {
        operators = ["+", "-"];
        min = 1;
        max = 10;
    }
    else if (difficulty === "2") {
        operators = ["+", "-"];
        min = 1;
        max = 50;
    }
    else {
        operators = ["+", "-", "*", "/"];
        min = 1;
        max = 100;
    }

    start_button.addEventListener("click", () => {
        tuto_container.classList.toggle("visible");
        game_container.classList.toggle("visible");
        startGame(operators, min, max);
    });
}

difficulties_button.forEach(element => {
    element.addEventListener("click", () => {
        difficulty_container.classList.toggle("visible");
        setGameOptions(element.value);
        tuto_container.classList.toggle("visible");
    })
});