const fs = require("fs");

const filePath = "./data/contestants.json";

const getAll = () => {
  const contestantsFile = fs.readFileSync(filePath);
  const contestantsData = JSON.parse(contestantsFile);
  
  return contestantsData;
}

const getOne = (id) => {
  const contestantsData = getAll();

  const singleContestant = contestantsData.find((contestant) => {
    return contestant.id === id
  });

  return singleContestant;
}

module.exports = { getAll, getOne };