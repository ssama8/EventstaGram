import userMutations from "./userMutations.js";
import eventMutations from "./eventMutations.js";
const allMutations = { ...userMutations, ...eventMutations };

export { allMutations };
