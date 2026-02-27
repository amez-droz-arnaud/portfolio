export const projectSection = {
  title: "Projet",
  content : [{
    name: "MNT complet",
    description: "Participation à la création du produit MNT complet diffusé sur Viageo.ch",
    image: "../image/mnt_complet.png"
  }, {
    name: "Dashboard Viageo",
    description: "Réalisation d'un dashboard pour le suivi des commandes extraites depuis viageo.ch à l'aide de l'outil ArcGIS Dashboard",
    image: "../image/dashboard.png"
  }, {
    name: "Photomesh",
    description: "Création d'un photomesh 3D à partir d'images issues d'un vol drone puis traitées avec le logiciel Drone2Map",
    image: "../image/pomy.png"
  }, {
    name: "Contrôle qualité",
    description: "Elaboration d'un script FME de contrôle qualité structurelle selon des règles de structuration internes avec des expressions XPATH",
    image: "../image/script-qualite.png"
  }, {
    name: "Orthophoto MAN",
    description: "Développement d'un workflow pour la standardisation automatique des orthophotos issues de la MAN à l'aide de FME et Python",
    image: "../image/ortho-man.png"
  }, {
    name: "Where2Play",
    description: "Création d'une application Web (PWA) recensant les terrains de sport de la Suisse romande",
    image: "../image/w2p.png"
  }
]
}

export function createProjectSection(projectSection) {
  let projectHTML = "" 
  projectSection.content.forEach(element => {

    projectHTML += `
    <div class="grid-item">

      <img class="project" src=${element.image}></img>
      <div class="text-container">
        <p class="name">${element.name}</p>
        <p class="description">${element.description}</p>
      </div>    
    </div>
    `

  });

  
  const sectionHTML =`
  <div class="section-content">
    <h1>${projectSection.title}</h1>
    <div class="content-container">${projectHTML}</div>
  </div>
  `


  document.getElementById("project-section").innerHTML = sectionHTML
}