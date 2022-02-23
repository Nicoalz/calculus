difficulties_button = document.querySelectorAll(".difficulty");
start_button = document.querySelector(".start");

difficulty_container = document.querySelector(".difficulty_container");
tuto_container = document.querySelector(".tuto_container");
game_container = document.querySelector(".game_container");

question_content = document.querySelector("#question_content");
propositions_content = document.querySelectorAll(".proposition");

score_content = document.querySelector("#score_content");
count_content = document.querySelector("#count_content");

next_button = document.querySelector(".next");

count = 0;
score = 0;

propositions_content.forEach(element => {
    element.addEventListener("click", function() {
        if (this.innerHTML == answer) {
            score++;
            game(operators, min, max);
        }
        else {
            alert("Wrong!");
        }
    });
});

next_button.addEventListener("click", () => {
    game(operators, min, max);
});

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
    propositions = [];
    propositions.push(answer);
    propositions.push(answer + 10);
    max_proposition = answer + 5;
    min_proposition = answer - 5;
    for (let i = 2; i < propositions_content.length; i++) {
        let proposition = Math.floor(Math.random() * (max_proposition - min_proposition + 1) + min_proposition);

        if (proposition === answer || propositions.includes(proposition)) {
            i--;
            continue; 
        }
        
        propositions.push(proposition);

    }
    
    propositions.sort(() => Math.random() - 0.5);
    return propositions;
}



function game(operators, min, max) {
    score_content.innerHTML = score;
    count++;
    count_content.innerHTML = count;
    if (count <10) {
        [question, answer] = generateQuestion(operators, min, max);
        propositions = generatePropositions(answer)
    
        question_content.innerHTML = question;
        for (let i = 0; i < propositions_content.length; i++) {
            propositions_content[i].innerHTML = propositions[i];
        }
        console.log(propositions);
        console.log(answer);
    }
    else {
        alert("Finish");
    }

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
        game(operators, min, max);
    });
}

difficulties_button.forEach(element => {
    element.addEventListener("click", () => {
        difficulty_container.classList.toggle("visible");
        setGameOptions(element.value);
        tuto_container.classList.toggle("visible");
    })
});