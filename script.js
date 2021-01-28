"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "A date",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "A date",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "A date",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "A date",
    passed: true,
  },
];
console.log(submissions);

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
// addSubmission(submissions, "John", 98, "Cool date");
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);
// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (index !== -1) {
    deleteSubmissionByIndex(array, index);
  }
};
// deleteSubmissionByName(submissions, "Joe");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
// editSubmission(submissions, 2, 100);
// console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.find((submission) => {
    return submission.name === name;
  });
};
// console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore = (array) => {
  let lowestScore = array[0].score;
  array.forEach((submission) => {
    if (submission.score < lowestScore) {
      lowestScore = submission.score;
    }
  });
  return lowestScore;
};
// console.log(findLowestScore(submissions));

// NUMBER 8 SUCKS
// const findAverageScore = (array) => {};
// console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.passed;
  });
};
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((submission) => {
    return submission.score >= 90;
  });
};
// console.log(filter90AndAbove(submissions));
