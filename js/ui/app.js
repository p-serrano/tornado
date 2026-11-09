const App = {

    async init() {
        AppState.init();

        console.log("Tornado: checking starter packs...");

        try {
            await PackLoader.loadAndInstallAll();

            console.log("Tornado: starter packs checked.");
        } catch (error) {
            console.error(
                "Tornado: starter pack synchronization failed.",
                error
            );
        }

        this.render();
    },


    render() {

        const container = document.getElementById("app");

        container.className = "app-shell";

        switch (AppState.currentView) {

            case "setup":

                SetupView.render(container);

                break;


            case "game":

                GameView.render(container);

                break;


            case "results":

                ResultsView.render(
                    container,
                    GameManager.getById(
                        AppState.currentGameId
                    )
                );

                break;


            case "questions":

                QuestionsView.render(container);

                break;


            case "questionSets":

                QuestionSetsView.render(container);

                break;
                

            case "howToPlay":

                HowToPlayView.render(container);

                break;



            case "home":
            default:

                HomeView.render(container);

                break;

        }

    }

};


document.addEventListener("DOMContentLoaded", () => {

    App.init();

});