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
);

export const getAllSimplePrompt = titleData.filter((element) =>
  element.match(simplePromptRegEx)
);

export const getAllEstablishedUniversePrompt = titleData.filter((element) =>
  element.match(establishedPromptRegEx)
);

console.log({getAllWritingPrompt});
// write the output of getAllWritingPrompt to a file
const writingPrompts = JSON.stringify(getAllWritingPrompt);
const simplePrompts = JSON.stringify(getAllSimplePrompt);
const establishedUniversePrompts = JSON.stringify(getAllEstablishedUniversePrompt);


const writingPromptsFile = fs.writeFileSync("./writing-prompts.txt", writingPrompts, {flag: "w+"});
const simplePromptsFile = fs.writeFileSync("./simple-prompts.txt", simplePrompts, {flag: "w+"});
const establishedUniversePromptsFile = fs.writeFileSync("./established-universe-prompts.txt", establishedUniversePrompts, {flag: "w+"});
