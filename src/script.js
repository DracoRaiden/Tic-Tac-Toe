let boxes = document.querySelectorAll(".O")
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let playerO = true;
let msg = document.querySelector("#winner");


console.log("boxes" ,boxes)


for(let box of boxes) {
    box.addEventListener("mouseenter", () => {
    box.style.cursor = "pointer";
    });
}


const reset_game = () => {
    playerO = true;    
    enable_boxes();
    msgContainer.classList.add("hide");
}

const disable_boxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const enable_boxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let first = "", second = "", third = "";

const checkWinner = () => {
    for(let pattern of win){
        first = boxes[pattern[0]].innerText;
        second = boxes[pattern[1]].innerText;
        third = boxes[pattern[2]].innerText;
        if(first != "" && second != "" && third != ""){
            if(first == second && first == third){
                msg.innerText = `Player ${first} Wins!`;
                msgContainer.classList.remove("hide");
                reset.style.display = "none";
                disable_boxes();
            }
        }
    }
}

const checkBtn = () => {
    let check = true;
    for(let box of boxes){
        if(box.disabled === false){
            check = true;
            break;
        }
        else{ 
            check = false;
        }
    }
    return check;
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the button was clicked!");
        if (playerO) {
            box.classList.remove("X");
            box.classList.add("O");
            box.innerText = "O";
            playerO = false;
        }
        else {
            box.classList.remove("O");
            box.classList.add("X");
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;

        if(!checkBtn()){
            msg.innerText = "Draw!";
            msgContainer.classList.remove("hide");
        }    
        checkWinner();
    });

});


reset.addEventListener("click" , reset_game);
newbtn.addEventListener("click" , reset_game);