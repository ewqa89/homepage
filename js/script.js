{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleImageActivityClick = () => {
        const mainImageActivity = document.querySelector(".js-mainImageActivity");
        const highFiveButton = document.querySelector(".js-HighFiveButton");

        mainImageActivity.classList.toggle("main__ImageActivity");
        mainImageActivity.classList.toggle("main__ImageNonActivity");

        highFiveButton.innerText = mainImageActivity.classList.contains("main__ImageActivity") ? "Przybij piątkę" : "Nie przybijaj piątki";
    };

    const init = () => {
        const mainButton = document.querySelector(".js-mainButton");
        mainButton.addEventListener("click", toggleImageActivityClick);
        
        welcome();

    };
    init();
}