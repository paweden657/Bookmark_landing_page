let logoWriting = document.getElementById("logo-writing");
let circle = document.getElementById("circle");
let circleMark = document.getElementById("circle-mark");

let hamburgerBtn = document.getElementById("hamburger-icon");
let navList = document.getElementById("nav-menu-list");
let socialMedia = document.getElementById("social-media-nav");

let header = document.querySelector("header");
let nav = document.querySelector("nav");
let main = document.querySelector("main");

let headerHeight = 0;

let simpleBookmarkingP = document.getElementById("simple-bookmarking");
let speedySearchingP = document.getElementById("speedy-searching");
let easySharingP = document.getElementById("easy-sharing");

let question1 = document.getElementById("question-1");
let question2 = document.getElementById("question-2");
let question3 = document.getElementById("question-3");
let question4 = document.getElementById("question-4");

let input = document.getElementById("mail-input");
let contactUsBtn = document.getElementById("conntact-btn");

let iconError = document.getElementById("icon-error");
let bg = document.getElementById("not-valid-bg");
let notValidP = document.getElementById("not-valid-mail");

let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let showNavList = () => {
    if(hamburgerBtn.src.endsWith("images/icon-hamburger.svg")) {
        headerHeight = header.offsetHeight;
        main.style.top = headerHeight + "px";

        hamburgerBtn.src = "images/icon-close.svg";

        document.body.style.overflow = "hidden";

        logoWriting.classList.add("set-logo-color");
        circle.classList.add("set-logo-color");
        circleMark.classList.add("set-circle-mark");

        header.classList.add("show-nav-header");
        nav.classList.add("show-nav-nav");
        main.classList.add("show-nav-main");

        navList.classList.remove("hide");
        socialMedia.classList.remove("hide");
    } else {
        hamburgerBtn.src = "images/icon-hamburger.svg";

        document.body.style.overflow = "auto";

        logoWriting.classList.remove("set-logo-color");
        circle.classList.remove("set-logo-color");
        circleMark.classList.remove("set-circle-mark");

        header.classList.remove("show-nav-header");
        nav.classList.remove("show-nav-nav");
        main.classList.remove("show-nav-main");

        navList.classList.add("hide");
        socialMedia.classList.add("hide");
    }
}

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
        iconError.classList.add("hide");
        bg.classList.add("hide");
        notValidP.classList.add("hide")
    } else {
        iconError.classList.remove("hide");
        bg.classList.remove("hide");
        notValidP.classList.remove("hide")
    }
}


hamburgerBtn.addEventListener("click", () => {showNavList()});


simpleBookmarkingP.addEventListener("click", () => {showPage(1)});

speedySearchingP.addEventListener("click", () => {showPage(2)});

easySharingP.addEventListener("click", () => {showPage(3)});


question1.addEventListener("click", () => {showAnswer(1)});

question2.addEventListener("click", () => {showAnswer(2)});

question3.addEventListener("click", () => {showAnswer(3)});

question4.addEventListener("click", () => {showAnswer(4)});


contactUsBtn.addEventListener("click", () => {checkEmail()});

window.addEventListener("resize", () => {
    if(hamburgerBtn.src.endsWith("images/icon-close.svg") && window.innerWidth > 768) {
        hamburgerBtn.src = "images/icon-hamburger.svg";

        document.body.style.overflow = "auto";

        logoWriting.classList.remove("set-logo-color");
        circle.classList.remove("set-logo-color");
        circleMark.classList.remove("set-circle-mark");

        header.classList.remove("show-nav-header");
        nav.classList.remove("show-nav-nav");
        main.classList.remove("show-nav-main");

        navList.classList.add("hide");
        socialMedia.classList.add("hide");

    }
});