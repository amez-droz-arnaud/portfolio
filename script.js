import { listSection, createSection, createNavigation } from "./data/section.js?v=1";
import { infoSection, createInfoSection } from "./data/info.js?v=1";
import { careerSection, createCareerSection } from "./data/career.js?v=1";
import { skillSection, createSkillSection } from "./data/skill.js?v=1";
import { certificateSection, createCertificateSection } from "./data/certificate.js?v=1";
import { projectSection, createProjectSection } from "./data/project.js?v=1";
import { contactSection, createContactSection } from "./data/contact.js?v=1";


function toggleTheme() { 
    const icon = document.getElementById("theme-icon");
    document.body.classList.toggle("dark-mode");
    if (icon.innerText === "dark_mode") {
        icon.innerText = "light_mode"
    } else {
        icon.innerText = "dark_mode"
    }
}

function openMenu() {
    const navContainer = document.getElementById("nav")
    navContainer.classList.toggle("open")
}


createSection(listSection);
createInfoSection(infoSection);
createCareerSection(careerSection);
createSkillSection(skillSection);
createCertificateSection(certificateSection);
createProjectSection(projectSection);
createContactSection(contactSection);
createNavigation(listSection)

const themeButton = document.getElementById("theme-button");
const navButton = document.getElementsByClassName("navigation-button");

themeButton.addEventListener("click", toggleTheme)

Array.from(navButton).forEach(element => {
    element.addEventListener("click", openMenu)
});
