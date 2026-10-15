const ResultsView = {
    render(container, game) {
        const ranking = [...game.teams]
            .sort((a, b) => b.score - a.score);

        container.innerHTML = `
            <div class="screen">
                <div class="card">
                    <h1>🌪️ GAME OVER</h1>
                    <p>${Utils.escapeHTML(game.name)}</p>

                    <table class="result-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${ranking.map((team, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${Utils.escapeHTML(team.name)}</td>
                                    <td>${team.score.toLocaleString()}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>

                    <div class="game-actions">
                        <button class="primary-button" id="newGameFromResults">
                            NEW GAME
                        </button>

                        <button class="secondary-button" id="homeFromResults">
                            HOME
                        </button>
                    </div>
                </div>
            </div>
        `;

        document
            .getElementById("newGameFromResults")
            .addEventListener("click", () => {
                AppState.goTo("setup");
                App.render();
            });

        document
            .getElementById("homeFromResults")
            .addEventListener("click", () => {
                AppState.goTo("home");
                App.render();
            });
    }
};
