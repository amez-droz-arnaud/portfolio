import { projectData, footerHTML, navHTML, contactButtonHTML } from "../data/data.js";
import { createFooter, zoomOnClick } from "./script.js";


document.getElementById("header").innerHTML = navHTML;
document.getElementById("contact-button-container").innerHTML = contactButtonHTML;
createFooter(projectData, footerHTML);

zoomOnClick();