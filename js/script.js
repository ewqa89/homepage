{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleImageActivityClick = () => {
        const mainImageActivity = document.querySelector(".js-mainImageActivity");
        const highFiveButton = document.querySelector(".js-HighFiveButton");

        mainImageActivity.classList.toggle("main__imageActivity");
        mainImageActivity.classList.toggle("main__imageNonActivity");

        highFiveButton.innerText = mainImageActivity.classList.contains("main__imageActivity") ? "Przybij piątkę" : "Nie przybijaj piątki";
    };

    const init = () => {
        const mainButton = document.querySelector(".js-mainButton");
        mainButton.addEventListener("click", toggleImageActivityClick);
        
        welcome();

    };
    init();
}