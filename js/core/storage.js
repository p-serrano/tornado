/* =========================================================
   TORNADO — STORAGE
========================================================= */

const Storage = (() => {

    const DATA_KEY = "tornado_data";
    const CONTEXT_KEY = "tornado_context";

    const CURRENT_VERSION = 2;


    // -----------------------------------------------------
    // DEFAULT DATA
    // -----------------------------------------------------

    function createDefaultData() {

        return {
            version: CURRENT_VERSION,

            questionSets: [],

            questions: [],

            games: []
        };

    }


    // -----------------------------------------------------
    // NORMALIZE DATA
    // -----------------------------------------------------

    function normalizeData(data) {

        if (!data || typeof data !== "object") {
            return createDefaultData();
        }

        if (!Array.isArray(data.questionSets)) {
            data.questionSets = [];
        }

        if (!Array.isArray(data.questions)) {
            data.questions = [];
        }

        if (!Array.isArray(data.games)) {
            data.games = [];
        }

        data.version = CURRENT_VERSION;

        return data;

    }


    // -----------------------------------------------------
    // GET DATA
    // -----------------------------------------------------

    function getData() {

        const raw = localStorage.getItem(DATA_KEY);

        if (!raw) {
            return createDefaultData();
        }

        try {

            const data = JSON.parse(raw);

            return normalizeData(data);

        } catch (error) {

            console.error(
                "Could not read Tornado data.",
                error
            );

            return createDefaultData();

        }

    }


    // -----------------------------------------------------
    // SAVE DATA
    // -----------------------------------------------------

    function saveData(data) {

        const normalizedData = normalizeData(data);

        localStorage.setItem(
            DATA_KEY,
            JSON.stringify(normalizedData)
        );

    }


    // -----------------------------------------------------
    // CONTEXT
    // -----------------------------------------------------

    function getContext() {

        const raw = localStorage.getItem(CONTEXT_KEY);

        if (!raw) {

            return {
                currentView: "home",
                currentGameId: null
            };

        }

        try {

            return JSON.parse(raw);

        } catch (error) {

            console.error(
                "Could not read Tornado context.",
                error
            );

            return {
                currentView: "home",
                currentGameId: null
            };

        }

    }


    // -----------------------------------------------------
    // SAVE CONTEXT
    // -----------------------------------------------------

    function saveContext(context) {

        localStorage.setItem(
            CONTEXT_KEY,
            JSON.stringify(context)
        );

    }


    // -----------------------------------------------------
    // PUBLIC API
    // -----------------------------------------------------

    return {
        getData,
        saveData,
        getContext,
        saveContext
    };

})();