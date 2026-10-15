const AppState = {
    currentView: "home",
    currentGameId: null,
    initialized: false,

    init() {
        // Always start from the home screen.
        this.currentView = "home";
        this.currentGameId = null;

        this.initialized = true;

        // Save the initial context.
        this.saveContext();
    },

    saveContext() {
        Storage.saveContext({
            currentView: this.currentView,
            currentGameId: this.currentGameId
        });
    },

    goTo(view, gameId = null) {
        this.currentView = view;
        this.currentGameId = gameId;
        this.saveContext();
    }
};