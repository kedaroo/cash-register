const billAmount = document.querySelector("#bill-amount");
const tenderedCash = document.querySelector("#tendered-cash");
const btnResult = document.querySelector("#btn-result");
const btnNext = document.querySelector("#btn-next");
const divTenderedCashInput = document.querySelector("#div-tendered-cash-input");
const errorMsg = document.querySelector("#error-msg");
const denominationQuantity = document.querySelectorAll(".denomination-quantity");

const denominations = [2000, 500, 100, 20, 10, 5, 1];

function showErrorMsg(msg, color="red") {
    errorMsg.style.display = "block";
    errorMsg.style.color = color;
    errorMsg.innerText = msg;
}

function calculateChange() {
    errorMsg.style.display = "none";
    var changeAmount = tenderedCash.value - billAmount.value;
    if (billAmount.value > 0) {
        if (tenderedCash.value == billAmount.value) {
            showErrorMsg("no change required", "#2a9df4");
        }
        if (tenderedCash.value >= billAmount.value) {
            for (let i = 0; i < denominations.length; i++) {
                denominationQuantity[i].innerText = Math.trunc(changeAmount / denominations[i]);
                changeAmount = changeAmount % denominations[i];
            }
        } else {
            console.log("please tender cash more than or equal to the bill amount");
            showErrorMsg("please tender cash more than or equal to the bill amount");
        }
    } else {
        console.log("bill amount must be greater than 0");
        showErrorMsg("bill amount must be greater than 0");
    }
}

function showNextSection() {
    if (billAmount.value) {
        errorMsg.style.display = "none";
        btnNext.style.display = "none";
        divTenderedCashInput.style.display = "flex";
    } else {
        showErrorMsg("please enter bill amount!");
    }
}

btnNext.addEventListener("click", showNextSection);

btnResult.addEventListener("click", calculateChange);