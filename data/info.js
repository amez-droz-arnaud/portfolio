export const infoSection = {
  title: "Qui suis-je ?",
  content: {
    text: [
      "Titulaire d'un CFC de géomaticien obtenu à la Direction du Cadastre et de la Géoinformation, je suis spécialisé en géoinformatique.",
      "Le domaine de la géomatique me passionne : analyser, rechercher et développer des solutions sont des tâches que j'apprécie tout particulièrement. J'ai le souhait de perfectionner mes compétences en géoinformatique en exploitant différents langages de programmation afin d'offrir une nouvelle approche aux défis liés aux géodonnées."
    ],
    image: "../image/moi.jpg"
}
};

export function createInfoSection(infoSection) {
  let textHTML = "" 
  infoSection.content.text.forEach(element => {
    const textValue = `<p>${element}</p>`
    textHTML += textValue
  });

  
  const sectionHTML =`
  <div class="section-content">
    <div class="image-container">
      <img id="profil-picture" src="${infoSection.content.image}" alt="">
    </div>
    
    
    <div class="content-container">
      <h1>${infoSection.title}</h1>
      <div class="text-container">${textHTML}</div>
    </div>
  </div>
  `


  document.getElementById("info-section").innerHTML = sectionHTML
}
