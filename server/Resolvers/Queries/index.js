import eventQueries from "./eventQueries.js";
import userQueries from "./userQueries.js";
const allQueries = { ...eventQueries, ...userQueries };
export { allQueries };
