const HomeView = {

    render(container) {

        container.innerHTML = `
            <section class="home-screen">

                <div class="home-background-shape home-shape-one"></div>
                <div class="home-background-shape home-shape-two"></div>
                <div class="home-background-shape home-shape-three"></div>

                <main class="home-content">

                    <!-- BRAND -->
                    <header class="home-brand">

                        <img
                            src="assets/images/tornado-logo.png"
                            alt="Tornado"
                            class="home-logo"
                        >

                        <p class="home-description">
                            One question. One choice.
                            FEAR THE TORNADO.
                        </p>

                    </header>


                    <!-- CASCADING MENU -->
                    <nav class="home-menu" aria-label="Main menu">

                        <button
                            class="home-menu-button home-menu-primary"
                            id="newGameButton"
                            type="button"
                        >
                            <span class="home-menu-number">01</span>

                            <span class="home-menu-label">
                                NEW GAME
                            </span>

                            <span class="home-menu-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </button>


                        <button
                            class="home-menu-button home-menu-secondary"
                            id="questionBankButton"
                            type="button"
                        >
                            <span class="home-menu-number">02</span>

                            <span class="home-menu-label">
                                QUESTION BANK
                            </span>

                            <span class="home-menu-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </button>


                        <button
                            class="home-menu-button home-menu-tertiary"
                            id="questionSetsButton"
                            type="button"
                        >
                            <span class="home-menu-number">03</span>

                            <span class="home-menu-label">
                                QUESTION SETS
                            </span>

                            <span class="home-menu-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </button>


                        <button
                            class="home-menu-button home-menu-quaternary"
                            id="howToPlayButton"
                            type="button"
                        >
                            <span class="home-menu-number">04</span>

                            <span class="home-menu-label">
                                HOW TO PLAY
                            </span>

                            <span class="home-menu-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </button>

                    </nav>

                </main>

            </section>
        `;


        // -----------------------------------------------------
        // NEW GAME
        // -----------------------------------------------------

        document
            .getElementById("newGameButton")
            .addEventListener("click", () => {

                AppState.goTo("setup");
                App.render();

            });



        // -----------------------------------------------------
        // QUESTION BANK
        // -----------------------------------------------------

        document
            .getElementById("questionBankButton")
            .addEventListener("click", () => {

                AppState.goTo("questions");
                App.render();

            });


        // -----------------------------------------------------
        // QUESTION SETS
        // -----------------------------------------------------

        document
            .getElementById("questionSetsButton")
            .addEventListener("click", () => {

                AppState.goTo("questionSets");
                App.render();

            });


        // -----------------------------------------------------
        // HOW TO PLAY
        // -----------------------------------------------------

        document
            .getElementById("howToPlayButton")
            .addEventListener("click", () => {

                AppState.goTo("howToPlay");
                App.render();

            });

    }


};
