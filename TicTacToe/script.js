

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn-reset");
let turnO = true;//playerX,playerO 
let winnerContainer=document.querySelector(".winner-container");
let msg=document.querySelector("#msg");

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turnO) {
            box.innerHTML = "X";
            turnO = false;
        } else {
            box.innerHTML = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = pattern[0];
        let pos2 = pattern[1];
        let pos3 = pattern[2];

        let pos1Val = boxes[pos1].innerText;
        let pos2Val = boxes[pos2].innerText;
        let pos3Val = boxes[pos3].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                ShowWinner(pos1Val);
                setTimeout(resetGame,2000);
            }
        }
    }
}

function ShowWinner(winner){
   msg.innerHTML=`Winner is ${winner}`;
   winnerContainer.classList.remove("hide");
   setTimeout(() => {
        winnerContainer.classList.add("hide");
    }, 2000);
}

resetbtn.addEventListener("click",resetGame);

function resetGame() {
    boxes.forEach((box) =>{
        box.disabled = false;
        box.innerHTML = "";
        winnerContainer.classList.add("hide");
        });
}
