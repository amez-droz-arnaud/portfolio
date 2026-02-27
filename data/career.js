export const careerSection = {
  title: 'Parcours',
  content: [{
    index: 0,
    date: "Juin 2018",
    type: "Ecole",
    description: "Obtention du certificat de fin d'études secondaires (VP) OS : mathématique et physique"
  }, {
    index: 1,
    date: "Août 2018 - Novembre 2019",
    type: "Apprentissage",
    description: "Apprentissage de cuisine au restaurant du Cerf à Cossonay"
  }, {
    index: 2,
    date: "Décembre 2020",
    type: "Stage",
    description: "Stage en mensuration dans le bureau Mosini et Caviezel"
  }, {
    index: 3,
    date: "Avril 2022",
    type: "Stage",
    description: "Stage en mensuration dans le bureau BBHN"
  }, {
    index: 4,
    date: "Août 2020 - Août 2024",
    type: "Apprentissage",
    description: "Apprentissage de géomaticien spécialisé en géoinformatique à la direction du Cadastre et de la géoinformation à Lausanne"
  }, {
    index: 5,
    date: "Août 2024 - Juin 2025",
    description: "Maturité technique post CFC +1 à l'ETML "
  }, {
    index: 6,
    date: "Septembre 2025 - Octobre 2025",
    description: "Séjour linguistique de 2 mois en Angleterre"
  }, {
    index: 7,
    date: "Février 2026 (en cours)",
    description: "Service civil : Spécialiste SIG - Cartographe, à la DGE-DIRNA-EAU"
  }
  ]
};

export function createCareerSection(careerSection) {
  let textHTML = "" 
  const len = careerSection.content.length - 1
  careerSection.content.forEach(element => {

    const textValue = `
      <div class="career-item ">
        <p class="career-date">${element.date}</p>
        <p>${element.description}</p>
      </div>
      ${len === element.index ? '' : `<span class="divider"></span>`}
      `
    textHTML += textValue
  });

  const careerHTML =`
  <div class="section-content">
    <h1>${careerSection.title}</h1>
    <div class="content-container">${textHTML}</div>
  </div>
    
    `


  document.getElementById("career-section").innerHTML = careerHTML
}
