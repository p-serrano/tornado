const AppState = {
    currentView: "home",
    currentGameId: null,
    initialized: false,

    init() {
        const context = Storage.getContext();

        this.currentView = context.currentView || "home";
        this.currentGameId = context.currentGameId || null;
        this.initialized = true;
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
