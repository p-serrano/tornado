const TeamManager = {
    create(name) {
        return {
            id: Utils.createId("team"),
            name: name.trim(),
            score: 0
        };
    }
};
