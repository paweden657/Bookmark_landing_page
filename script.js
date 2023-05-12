let simpleBookmarkingP = document.getElementById("simple-bookmarking");
let speedySearchingP = document.getElementById("speedy-searching");
let easySharingP = document.getElementById("easy-sharing");

let question1 = document.getElementById("question-1");
let question2 = document.getElementById("question-2");
let question3 = document.getElementById("question-3");
let question4 = document.getElementById("question-4");

let input = document.getElementById("mail-input");
let contactUsBtn = document.getElementById("conntact-btn");

let bg = document.getElementById("not-valid-bg");
let notValidP = document.getElementById("not-valid-mail");

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let showPage = (pageNumber) => {
    if(window.innerWidth > 768) {
        for(let i = 1; i <= 3; i++) {
            document.querySelector("#backlight-" + i).classList.add("hide");
            document.querySelector("#page-" + i).classList.add("hide");
        }   
        document.querySelector("#backlight-" + pageNumber).classList.remove("hide");
        document.querySelector("#page-" + pageNumber).classList.remove("hide");
    } else {
        for(let i = 1; i <= 3; i++) {
            document.querySelector("#backlight-mobile-" + i).classList.add("hide");
            document.querySelector("#page-" + i).classList.add("hide");
        }   
        document.querySelector("#backlight-mobile-" + pageNumber).classList.remove("hide");
        document.querySelector("#page-" + pageNumber).classList.remove("hide");
    }

}

let showAnswer = (questionNumber) => {
    let element = document.querySelector("#answer-" + questionNumber);
    if(element.classList.contains("hide")) {
        element.classList.remove("hide");
        document.querySelector("#arrow-" + questionNumber).classList.add("open");
    } else {
        element.classList.add("hide");
        document.querySelector("#arrow-" + questionNumber).classList.remove("open");
    }
    
}

let checkEmail = () => {
    let mail = input.value;
    if(regex.test(mail)) {
        bg.classList.add("hide");
        notValidP.classList.add("hide")
    } else {
        bg.classList.remove("hide");
        notValidP.classList.remove("hide")
    }
}


simpleBookmarkingP.addEventListener("click", () => {showPage(1)});

speedySearchingP.addEventListener("click", () => {showPage(2)});

easySharingP.addEventListener("click", () => {showPage(3)});


question1.addEventListener("click", () => {showAnswer(1)});

question2.addEventListener("click", () => {showAnswer(2)});

question3.addEventListener("click", () => {showAnswer(3)});

question4.addEventListener("click", () => {showAnswer(4)});


contactUsBtn.addEventListener("click", () => {checkEmail()});