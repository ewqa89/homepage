console.log("Cześć!");

let mainButton = document.querySelector(".main__Button");
let mainImgeActivity = document.querySelector(".main__ImgeActivity");
let highFiveButton = document.querySelector(".js-HighFiveButton");

mainButton.addEventListener("click", () => {
    mainImgeActivity.classList.toggle("main__ImgeActivity");
    mainImgeActivity.classList.toggle("main__ImgeNonActivity");

    if (mainImgeActivity.classList.contains("main__ImgeActivity")) {
        highFiveButton.innerText = "Przybij piątkę";
    }

    else {
        highFiveButton.innerText = "Nie przybijaj piątki";
    }

});