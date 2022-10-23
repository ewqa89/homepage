{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleImageActivityClick = () => {
        const mainImgeActivity = document.querySelector(".js-mainImageActivity");
        const highFiveButton = document.querySelector(".js-HighFiveButton");

        mainImgeActivity.classList.toggle("main__ImgeActivity");
        mainImgeActivity.classList.toggle("main__ImgeNonActivity");

        highFiveButton.innerText = mainImgeActivity.classList.contains("main__ImgeActivity") ? "Przybij piątkę" : "Nie przybijaj piątki";
    };

    const init = () => {
        const mainButton = document.querySelector(".js-mainButton");
        mainButton.addEventListener("click", toggleImageActivityClick);
        
        welcome();

    };
    init();
}