import { surpriseMePrompts } from "../constants";

export function getRadomPrompt(prompt){

    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //check to ensure we do not get same surpriseMePrompts in a row
    if(randomPrompt === prompt) return getRadomPrompt(prompt);

    return randomPrompt;
}