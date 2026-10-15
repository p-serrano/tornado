/* =========================================================
TORNADO — HOW TO PLAY
BEAUTIFUL CHAOS
PUNK × COMIC
========================================================= */

const HowToPlayView = {

    // -----------------------------------------------------
    // RENDER
    // -----------------------------------------------------

    render(container) {

        container.innerHTML = `

            <section class="how-to-play-screen">

                <!-- HEADER -->

                <header class="how-to-play-header">

                    <button
                        type="button"
                        class="how-to-play-back-button"
                        id="howToPlayBackButton"
                        aria-label="Back to home"
                    >
                        ←
                    </button>

                    <div class="how-to-play-heading">

                        <span class="how-to-play-eyebrow">
                            YOUR SURVIVAL GUIDE
                        </span>

                        <h1>
                            HOW TO <span>PLAY.</span>
                        </h1>

                        <p>
                            Four steps. One board. Absolute chaos.
                        </p>

                    </div>

                    <div class="how-to-play-sticker">
                        RULES / 01
                    </div>

                </header>


                <!-- FOUR STEPS -->

                <section class="how-to-play-steps">

                    <article class="how-to-play-step">

                        <span class="how-to-play-step-number">
                            01
                        </span>

                        <div class="how-to-play-step-content">

                            <span class="how-to-play-step-label">
                                ROUND ONE
                            </span>

                            <h2>BUILD YOUR TEAMS</h2>

                            <p>
                                Create your teams, give them names
                                and get ready to compete.
                            </p>

                        </div>

                        <span
                            class="how-to-play-step-icon"
                            aria-hidden="true"
                        >
                            ⚡
                        </span>

                    </article>


                    <article class="how-to-play-step">

                        <span class="how-to-play-step-number">
                            02
                        </span>

                        <div class="how-to-play-step-content">

                            <span class="how-to-play-step-label">
                                KNOW YOUR STUFF
                            </span>

                            <h2>ANSWER THE QUESTION</h2>

                            <p>
                                In Question Mode, answer correctly
                                to unlock the board. Get it wrong,
                                and the next team takes over.
                                In Teacher Mode, your teacher
                                decides if your answer is correct.
                            </p>

                        </div>

                        <span
                            class="how-to-play-step-icon"
                            aria-hidden="true"
                        >
                            ?
                        </span>

                    </article>


                    <article class="how-to-play-step">

                        <span class="how-to-play-step-number">
                            03
                        </span>

                        <div class="how-to-play-step-content">

                            <span class="how-to-play-step-label">
                                TAKE YOUR CHANCE
                            </span>

                            <h2>PICK A TILE</h2>

                            <p>
                                Get the answer right and choose
                                any unrevealed tile on the board.
                                You never know what's hiding underneath!
                            </p>

                        </div>

                        <span
                            class="how-to-play-step-icon"
                            aria-hidden="true"
                        >
                            ▦
                        </span>

                    </article>


                    <article class="how-to-play-step">

                        <span class="how-to-play-step-number">
                            04
                        </span>

                        <div class="how-to-play-step-content">

                            <span class="how-to-play-step-label">
                                EXPECT THE UNEXPECTED
                            </span>

                            <h2>SURVIVE THE CHAOS</h2>

                            <p>
                                Collect points, trigger special
                                effects and try to finish with
                                the highest score.
                            </p>

                        </div>

                        <span
                            class="how-to-play-step-icon"
                            aria-hidden="true"
                        >
                            🌪
                        </span>

                    </article>

                </section>


                <!-- SPECIAL TILES -->

                <section class="how-to-play-effects">

                    <header class="how-to-play-effects-header">

                        <div>

                            <span class="how-to-play-eyebrow">
                                KNOW YOUR ENEMIES
                            </span>

                            <h2>
                                THE <span>SPECIALS.</span>
                            </h2>

                        </div>

                        <span class="how-to-play-effects-note">
                            WHAT'S HIDING UNDERNEATH?
                        </span>

                    </header>


                    <div class="how-to-play-effects-grid">

                        <article class="how-to-play-effect effect-points">

                            <span class="how-to-play-effect-symbol">
                                +
                            </span>

                            <h3>POINTS</h3>

                            <p>
                                Add the points shown to your team's score.
                            </p>

                        </article>


                        <article class="how-to-play-effect effect-double">

                            <span class="how-to-play-effect-symbol">
                                ×2
                            </span>

                            <h3>DOUBLE</h3>

                            <p>
                                Double your team's score.
                            </p>

                        </article>


                        <article class="how-to-play-effect effect-half">

                            <span class="how-to-play-effect-symbol">
                                ÷2
                            </span>

                            <h3>HALF</h3>

                            <p>
                                Halve your team's score.
                                Fractions round up.
                            </p>

                        </article>


                        <article class="how-to-play-effect effect-swap">

                            <span class="how-to-play-effect-symbol">
                                ⇄
                            </span>

                            <h3>SWAP</h3>

                            <p>
                                Swap scores with another team.
                            </p>

                        </article>


                        <article class="how-to-play-effect effect-tornado">

                            <span class="how-to-play-effect-symbol">
                                🌪
                            </span>

                            <h3>TORNADO</h3>

                            <p>
                                Your team's score goes straight to zero!
                            </p>

                        </article>

                    </div>

                </section>


                <!-- CALL TO ACTION -->

                <section class="how-to-play-cta">

                    <div class="how-to-play-cta-copy">

                        <span class="how-to-play-eyebrow">
                            YOU HAVE BEEN WARNED
                        </span>

                        <h2>READY FOR CHAOS?</h2>

                        <p>
                            Pick your teams. Trust your instincts.
                            Blame the tornado.
                        </p>

                    </div>

                    <button
                        type="button"
                        class="how-to-play-play-button"
                        id="howToPlayStartButton"
                    >
                        LET'S PLAY! ↗
                    </button>

                </section>


                <!-- FOOTER -->

                <footer class="how-to-play-footer">
                    THINK FAST. CHOOSE WISELY.
                </footer>

            </section>

        `;

        this.bindEvents();

    },


    // -----------------------------------------------------
    // EVENTS
    // -----------------------------------------------------

    bindEvents() {

        document
            .getElementById("howToPlayBackButton")
            .addEventListener("click", () => {

                AppState.goTo("home");

                App.render();

            });


        document
            .getElementById("howToPlayStartButton")
            .addEventListener("click", () => {

                AppState.goTo("setup");

                App.render();

            });

    }

};