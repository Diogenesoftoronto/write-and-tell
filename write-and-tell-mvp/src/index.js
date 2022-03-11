// import fs from 'fs/promises';
const fs = require("fs");
const data = fs.readFileSync("../reddit-data.txt");
const parsedData = JSON.parse(data);

const titleData = parsedData.map((element) => element.data.title);

const urlData = parsedData.map((element) => element.data.url);

const authorData = parsedData.map((element) => element.data.author);

const writingPromptRegEx = /\[WP\](\w+)/g;
const simplePromptRegEx = /\[SP\](\w+)/g;
const establishedPromptRegEx = /\[EU\](\w+)/g;

const getAllWritingPrompt = titleData.map((element) =>
  element.match(writingPromptRegEx)
);

const getAllSimplePrompt = titleData.map((element) =>
  element.match(simplePromptRegEx)
);

const getAllEstablishedUniversePrompt = titleData.map((element) =>
  element.match(establishedPromptRegEx)
);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function addElementToNode(text, className) {
  // create a new div element
  const newParagraph = document.createElement("p");

  // and give it some content
  const newContent = document.createTextNode(text + "\n");

  // add the text node to the newly created div
  newParagraph.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementsByClassName(className);
  currentDiv.append(newParagraph);
}

const getWritingPrompt = () => {
  const randInt = getRandomInt(getAllWritingPrompt.length);
  const randPrompt = getAllWritingPrompt[randInt];
  addElementToNode(randPrompt, "card--prompt");
  // return randPrompt;
};
const getSimplePrompt = () => {
  const randInt = getRandomInt(getAllSimplePrompt.length);
  const randPrompt = getAllSimplePrompt[randInt];
  addElementToNode(randPrompt, "card--prompt");

  // return randPrompt;
};
const getEstablishedUniversePrompt = () => {
  const randInt = getRandomInt(getAllEstablishedUniversePrompt.length);
  const randPrompt = getAllEstablishedUniversePrompt[randInt];
  addElementToNode(randPrompt, "card--prompt");

  // return randPrompt;
};

module.exports = { getEstablishedUniversePrompt, getSimplePrompt, getWritingPrompt };
