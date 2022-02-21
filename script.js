difficulties_button = document.querySelectorAll(".difficulty");
start_button = document.querySelector(".start");

difficulty_container = document.querySelector(".difficulty_container");
tuto_container = document.querySelector(".tuto_container");
game_container = document.querySelector(".game_container");

function startGame(operators, min, max) {
    console.log(operators);
    console.log(min);
    console.log(max);
    for (let i = 0; i < 10; i++) {
        
        
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



//console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
