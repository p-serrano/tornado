const App = {

    init() {

        AppState.init();

        GrammarPresentSimple.install();
        GrammarPastSimple.install();
        GrammarPronounsToBeHave.install();

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