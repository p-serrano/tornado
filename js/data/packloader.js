/* =========================================================
   TORNADO — PACK LOADER
   Dynamically loads starter packs when synchronization is
   required.
========================================================= */

const PackLoader = (() => {

    const PACKS = [
        {
            name: "GrammarPresentSimple",
            file: "grammarPresentSimple.js"
        },
        {
            name: "GrammarPastSimple",
            file: "grammarPastSimple.js"
        },
        {
            name: "GrammarPronounsToBeHave",
            file: "grammarPronounsToBeHave.js"
        },
        {
            name: "GrammarFutureSimple",
            file: "grammarFutureSimple.js"
        },
        {
            name: "GrammarMixedFutures",
            file: "grammarMixedFutures.js"
        },
        {
            name: "GrammarPastSimpleVsPresentPerfect",
            file: "grammarPastSimpleVsPresentPerfect.js"
        },
        {
            name: "GrammarPastSimpleVsPastPerfect",
            file: "grammarPastSimpleVsPastPerfect.js"
        },
        {
            name: "GrammarRelativeClauses",
            file: "grammarRelativeClauses.js"
        },
        {
            name: "GrammarGerundsInfinitives",
            file: "grammarGerundsInfinitives.js"
        },
        {
            name: "GrammarZeroFirstConditionals",
            file: "grammarZeroFirstConditionals.js"
        },
        {
            name: "GrammarSecondThirdConditionals",
            file: "grammarSecondThirdConditionals.js"
        },
        {
            name: "GrammarModalVerbs",
            file: "grammarModalVerbs.js"
        },
        {
            name: "GrammarModalPerfects",
            file: "grammarModalPerfects.js"
        },
        {
            name: "GrammarReportedSpeechStatements",
            file: "grammarReportedSpeechStatements.js"
        },
        {
            name: "GrammarReportedSpeechQuestions",
            file: "grammarReportedSpeechQuestions.js"
        },
        {
            name: "GrammarReportedSpeechOrdersRequests",
            file: "grammarReportedSpeechOrdersRequests.js"
        },
        {
            name: "VocabularyDailyRoutinesTime",
            file: "vocabulary/vocabularyDailyRoutinesTime.js"
        }


    ];

    function loadScript(file) {

        return new Promise((resolve, reject) => {

            const script = document.createElement("script");

            script.src = `js/data/${file}`;

            script.onload = () => resolve();

            script.onerror = () => {
                reject(
                    new Error(`Could not load starter pack: ${file}`)
                );
            };

            document.head.appendChild(script);

        });

    }

    function getPackFingerprint(pack) {
        const content = JSON.stringify({
            id: pack.id,
            name: pack.name,
            description: pack.description || "",
            questions: pack.questions
        });

        let hash = 2166136261;

        for (let i = 0; i < content.length; i++) {
            hash ^= content.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }

        return (hash >>> 0).toString(16);
    }

    async function loadAndInstallAll() {
        const SYNC_STORAGE_KEY = "tornado_starter_pack_fingerprints";

        let fingerprints = {};

        try {
            fingerprints = JSON.parse(
                localStorage.getItem(SYNC_STORAGE_KEY) || "{}"
            );

            if (
                !fingerprints ||
                typeof fingerprints !== "object" ||
                Array.isArray(fingerprints)
            ) {
                fingerprints = {};
            }
        } catch (error) {
            console.warn(
                "Tornado: could not read starter pack fingerprints.",
                error
            );

            fingerprints = {};
        }

        const updatedFingerprints = { ...fingerprints };

        for (const packInfo of PACKS) {
            await loadScript(packInfo.file);

            const pack = window[packInfo.name];

            if (
                !pack ||
                typeof pack.install !== "function" ||
                !pack.id ||
                !Array.isArray(pack.questions)
            ) {
                throw new Error(
                    `Starter pack "${packInfo.name}" is invalid or could not be loaded.`
                );
            }

            const fingerprint = getPackFingerprint(pack);
            const previousFingerprint = fingerprints[pack.id];

            if (previousFingerprint === fingerprint) {
                console.log(
                    `Tornado: "${pack.name}" has not changed.`
                );

                continue;
            }

            console.log(
                `Tornado: synchronizing "${pack.name}"...`
            );

            pack.install();

            updatedFingerprints[pack.id] = fingerprint;

            // Save progress after each successfully installed pack.
            localStorage.setItem(
                SYNC_STORAGE_KEY,
                JSON.stringify(updatedFingerprints)
            );
        }

        if (window.StarterPackSync) {
            StarterPackSync.removeLegacyDemoEnglish();
        }

        // Remove fingerprints for packs no longer in the loader.
        const currentPackIds = new Set(
            PACKS.map(packInfo => {
                const pack = window[packInfo.name];
                return pack?.id;
            }).filter(Boolean)
        );

        const cleanedFingerprints = {};

        for (const packId of currentPackIds) {
            if (updatedFingerprints[packId]) {
                cleanedFingerprints[packId] =
                    updatedFingerprints[packId];
            }
        }

        localStorage.setItem(
            SYNC_STORAGE_KEY,
            JSON.stringify(cleanedFingerprints)
        );
    }

    return {
        loadAndInstallAll
    };

})();