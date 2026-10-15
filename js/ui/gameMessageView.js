// =========================================================
// TORNADO — GAME MESSAGES
// =========================================================

const GameMessageView = {

    // -----------------------------------------------------
    // SHOW MESSAGE
    // -----------------------------------------------------

    show({
        title = "TORNADO",
        message = "",
        type = "info",
        buttons = [],
        dismissible = true
    } = {}) {

        const existing =
            document.getElementById("gameMessageOverlay");

        if (existing) {
            existing.remove();
        }

        const overlay = document.createElement("div");

        overlay.id = "gameMessageOverlay";
        overlay.className = "game-message-overlay";

        const safeTitle = Utils.escapeHTML(title);
        const safeMessage = Utils.escapeHTML(message);

        const buttonHTML = buttons.map((button, index) => {

            const buttonClass =
                button.type === "danger"
                    ? "game-message-button danger"
                    : button.type === "secondary"
                        ? "game-message-button secondary"
                        : "game-message-button primary";

            return `
                <button
                    type="button"
                    class="${buttonClass}"
                    data-message-button="${index}"
                >
                    ${Utils.escapeHTML(button.label)}
                </button>
            `;

        }).join("");

        overlay.innerHTML = `
            <div
                class="game-message-card ${type}"
                role="dialog"
                aria-modal="true"
                aria-labelledby="gameMessageTitle"
            >

                ${
                    dismissible
                        ? `
                            <button
                                type="button"
                                class="game-message-close"
                                aria-label="Close message"
                            >
                                ×
                            </button>
                        `
                        : ""
                }

                <h2 id="gameMessageTitle">
                    ${safeTitle}
                </h2>

                <p class="game-message-text">
                    ${safeMessage}
                </p>

                <div class="game-message-actions">
                    ${buttonHTML}
                </div>

            </div>
        `;

        document.body.appendChild(overlay);

        const close = () => {
            overlay.remove();
        };

        if (dismissible) {

            overlay
                .querySelector(".game-message-close")
                .addEventListener("click", close);

            overlay.addEventListener("click", event => {

                if (event.target === overlay) {
                    close();
                }

            });

        }

        buttons.forEach((button, index) => {

            const element = overlay.querySelector(
                `[data-message-button="${index}"]`
            );

            element.addEventListener("click", () => {

                close();

                if (typeof button.action === "function") {
                    button.action();
                }

            });

        });

        const firstButton = overlay.querySelector("button");

        if (firstButton) {
            firstButton.focus();
        }

        return {
            close
        };

    },


    // -----------------------------------------------------
    // DECORATION
    // -----------------------------------------------------

    getDecoration(type) {

        const decorations = {
            info: "HEY!",
            success: "BOOM!",
            warning: "WATCH OUT!",
            error: "OH NO!",
            
        };

        return decorations[type] || "HEY!";

    },


    // -----------------------------------------------------
    // INFORMATION MESSAGE
    // -----------------------------------------------------

    info(title, message) {

        this.show({
            title,
            message,
            type: "info",
            buttons: [
                {
                    label: "GOT IT"
                }
            ]
        });

    },


    // -----------------------------------------------------
    // SUCCESS MESSAGE
    // -----------------------------------------------------

    success(title, message) {

        this.show({
            title,
            message,
            type: "success",
            buttons: [
                {
                    label: "LET'S GO!"
                }
            ]
        });

    },


    // -----------------------------------------------------
    // ERROR MESSAGE
    // -----------------------------------------------------

    error(title, message) {

        this.show({
            title,
            message,
            type: "error",
            buttons: [
                {
                    label: "OKAY"
                }
            ]
        });

    },


    // -----------------------------------------------------
    // CONFIRMATION MESSAGE
    // -----------------------------------------------------

    confirm({
        title = "ARE YOU SURE?",
        message = "",
        confirmLabel = "YES!",
        cancelLabel = "CANCEL",
        danger = false
    } = {}) {

        return new Promise(resolve => {

            this.show({
                title,
                message,
                type: danger ? "danger" : "warning",
                dismissible: false,
                buttons: [
                    {
                        label: cancelLabel,
                        type: "secondary",
                        action: () => resolve(false)
                    },
                    {
                        label: confirmLabel,
                        type: danger ? "danger" : "primary",
                        action: () => resolve(true)
                    }
                ]
            });

        });

    }

};