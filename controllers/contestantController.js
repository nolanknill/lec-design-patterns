const contestantModel = require("../models/contestantModel");

const getContestants = (_req, res) => {
    const contestants = contestantModel.getAll();

    // res.json(contestants);
    res.render("contestants", { contestants: contestants, title: "Rupaul's Drag Race Contestants" });
};

const getContestant = (req, res) => {
    const requestedId = Number(req.params.contestantId);
    const singleContestant = contestantModel.getOne(requestedId);

    res.render("contestant", { contestant: singleContestant});
}

module.exports = { getContestants, getContestant };