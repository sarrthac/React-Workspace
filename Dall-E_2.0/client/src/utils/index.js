import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt){

    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //check to ensure we do not get same surpriseMePrompts in a row
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
} 