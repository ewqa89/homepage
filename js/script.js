{
    const welcome = () => {
        console.log("Cześć!");
    }

    welcome();
    
let mainButton = document.querySelector(".js-mainButton");
let mainImgeActivity = document.querySelector(".js-mainImageActivity");
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
}