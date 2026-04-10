import { projectData, navHTML } from "../data/data.js";

import { createProjectSection } from "./script.js";


createProjectSection(projectData);

document.getElementById("header").innerHTML = navHTML;