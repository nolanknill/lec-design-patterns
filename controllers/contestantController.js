const contestantModel = require("../models/contestantModel");

const getContestants = (_req, res) => {
    const contestants = contestantModel.getAll();

    res.json(contestants);
};

const getContestant = (req, res) => {
    const requestedId = Number(req.params.contestantId);
    const singleContestant = contestantModel.getOne(requestedId);

    res.json(singleContestant);
}

module.exports = { getContestants, getContestant };