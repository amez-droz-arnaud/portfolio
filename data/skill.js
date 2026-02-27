export const skillSection = {
  title: 'Compétences',
  content: {
    perso : {
      subtitle: "Personnelles",
      value: ["Résistance au stress",
        "Autonome",
        "Perfectionniste",
      ]
    }, 
    technic: {
      subtitle: "Techniques",
      value: [
        {
          name: "Logique SIG",
          rate: 5,
        }, {
          name: "Outils Esri",
          rate: 5,
        }, {
          name: "FME",
          rate: 5,
        }, {
          name: "Microsoft 365",
          rate: 5,
        }, {
          name: "QGIS",
          rate: 4,
        }, {
          name: "PostgreSQL/PostGIS",
          rate: 4,
        }, {
          name: "Python",
          rate: 4,
        }, {
          name: "Javascript",
          rate: 4,
        }
      ]
    } 
  }
}

export function createSkillSection(skillSectionSection) {
  let persoSkillHTML = "" 
  const len = skillSection.content.perso.value.length - 1
  skillSection.content.perso.value.forEach((element, id) => {
    persoSkillHTML += `
      <div class="perso-skill-item">
        <p>${element}</p>
      </div>
      ${len === id ? '' : `<span class="divider"></span>`}
      `
  });

  let technicSkillHTML = ""
  const technicLen = skillSection.content.technic.value.length - 1
  skillSection.content.technic.value.forEach((element, id) => {
    const rateValue = element.rate
    
    let rateHTML = ""
    for (let i = 0; i < 5; i++){
      rateHTML +=  `<span class="material-icons${i < rateValue ? "": "-outlined"}">circle</span>` 
    }

    technicSkillHTML +=  `
      <div class="technic-skill-item">
        <p>${element.name}</p>
        <div class="rate-container">${rateHTML}</div>
      </div>
      ${technicLen === id ? '' : `<span class="divider"></span>`}
      `
  })

  const skillHTML = `
  <div class="section-content">
    <h1>${skillSection.title}</h1>
    <div class="content-container">
      <div class="perso-skill-container">
        <h2>${skillSection.content.perso.subtitle}</h2>
        ${persoSkillHTML}
      </div>
      <div class="technic-skill-container">
        <h2>${skillSection.content.technic.subtitle}</h2>
        ${technicSkillHTML}
      </div>
    </div>
  </div>
  
  `
  document.getElementById("skill-section").innerHTML = skillHTML
}