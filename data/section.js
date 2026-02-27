export const listSection = [{
    name: "Qui suis-je ?",
    id: "info-section"
  }, {
    name: "Parcours",
    id: "career-section"
  }, {
    name: "Compétences",
    id: "skill-section"
  }, {
    name: "Certificat",
    id: "certificate-section"
  }, {
    name: "Projet",
    id: "project-section"
  }, {
    name: "Contact",
    id: "contact-section"
  }
];

export function createSection(listSection) {
  let textHTML = "";
  let careerSkillContainer = "";
  listSection.forEach(element => {

    if (element.id === "career-section" || element.id === "skill-section") {
      careerSkillContainer += `<div id=${element.id}></div>`

      if (element.id === "skill-section") {
        textHTML += `
        <div class="section career-skill-container">
          <div class="career-skill-content">
            ${careerSkillContainer}
          </div>
        </div>`
      }
    } else {
      textHTML += `<div class="section" id=${element.id}></div>`
    };
    
  });

  document.getElementsByTagName("main")[0].innerHTML = textHTML
}

export function createNavigation(listSection) {
  let textHTML = "";
  const len = listSection.length - 1
  listSection.forEach(element => {
    const textValue = `<a href="#${element.id}" class="nav-link navigation-button" >${element.name}</a>
    ${len === element.id ? '' : `<span class="divider"></span>`}
    `    
    textHTML += textValue
  });

  const navigationHTML = `
  <div class="nav-top-bar">
    <button class="navigation-button" type="button">
      <span class="material-icons">close</span>
    </button>
  </div>
  <div class="link-container">${textHTML}</div>
  `


  document.getElementsByClassName("navigation-container")[0].innerHTML = navigationHTML


}


/*

      "Je m'appelle Arnaud, je suis né le 1er novembre 2002. Je suis géomaticien spécialisé en géoinformatique. J'ai obtenu mon CFC à la direction du cadastre et de la géoinformation dans le courant de l'année 2024.",
      "Je suis passioné par le monde de la géomatique. Analyser, rechercher et développer des solutions sont des tâches que j'apprécie tout particulièrement.",
      "Je cherche continuellement à approfondir mes connaissances dans le monde du SIG en explorant des thématiques diverses, documentation en ligne, langage de programmation, nouvelles technologies, etc..."
    
*/