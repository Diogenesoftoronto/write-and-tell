import fs from 'fs';
const data = fs.readFileSync("../reddit-data.txt");
const parsedData = JSON.parse(data);
// import { getAllWritingPrompt, getAllSimplePrompt, getAllEstablishedUniversePrompt} from './index.mjs';


const titleData = parsedData.map((element) => element.data.title);

const urlData = parsedData.map((element) => element.data.url);

const authorData = parsedData.map((element) => element.data.author);

const writingPromptRegEx = /\[WP\]\s.+/g;
const simplePromptRegEx = /\[SP\]\s.+/g;
const establishedPromptRegEx = /\[EU\]\s.+/g;

export const getAllWritingPrompt = titleData.filter((element) =>
  element.match(writingPromptRegEx)
).map((element) => {
    // replace the [WP] with nothing
    element = element.replace(/\[WP\]/g, '');
    return {"Content": element, 
    "Type": "DEFAULT", 
    "Author": "NONE", 
    "Created": "NONE", 
    "Answers": [],
    "Engagment": {
      "rating": 0,
      "views": 0,
      "age": 0,
    }};
});

export const getAllSimplePrompt = titleData.filter((element) =>
  element.match(simplePromptRegEx)
).map((element) => {
  // replace the [WP] with nothing
  element = element.replace(/\[SP\]/g, '');
  return {"Content": element, 
  "Type": "SIMPLE", 
  "Author": "NONE", 
  "Created": "NONE", 
  "Answers": [],
    "Engagment": {
      "rating": 0,
      "views": 0,
      "age": 0,
    }};
});;

export const getAllEstablishedUniversePrompt = titleData.filter((element) =>
  element.match(establishedPromptRegEx)
).map((element) => {
  // replace the [WP] with nothing
  element = element.replace(/\[EU\]/g, '');
  return {"Content": element, 
  "Type": "ESTABLISHED", 
  "Author": "NONE", 
  "Created": "NONE", 
  "Answers": [],
    "Engagment": {
      "rating": 0,
      "views": 0,
      "age": 0,
    }};
});;

// write the output of getAllWritingPrompt to a file
const writingPrompts = JSON.stringify(getAllWritingPrompt, null, 4);
const simplePrompts = JSON.stringify(getAllSimplePrompt, null, 4);
const establishedUniversePrompts = JSON.stringify(getAllEstablishedUniversePrompt, null, 4);


const writingPromptsFile = fs.writeFileSync("./writing-prompts.txt", writingPrompts, {flag: "w+"});
const simplePromptsFile = fs.writeFileSync("./simple-prompts.txt", simplePrompts, {flag: "w+"});
const establishedUniversePromptsFile = fs.writeFileSync("./established-universe-prompts.txt", establishedUniversePrompts, {flag: "w+"});
