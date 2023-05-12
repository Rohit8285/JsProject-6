const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollhistoryEl = document.getElementById("roll-history")

let historylist =[];

function rolldice() {
    const rollresult = Math.floor(Math.random()*6) +1;
    const diceface = getdiceface(rollresult);
    diceEl.innerHTML = diceface;
    historylist.push(rollresult)
    updaterollhistory();
}

function updaterollhistory() {
    rollhistoryEl.innerHTML ="";
    for (let i =0; i<historylist.length; i++){
        const listitem = document.createElement("li")
        listitem.innerHTML = `Roll ${i +1}: <span>${getdiceface(historylist[i])}</span>`
        rollhistoryEl.appendChild(listitem);
    }
}


function getdiceface(rollresult) {
    switch (rollresult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

buttonEl.addEventListener("click",()=>{
    diceEl.classList.add("roll-animation");
    setTimeout(() => 
    {diceEl.classList.remove("roll-animation");
        rolldice()
    }, 1000);
})