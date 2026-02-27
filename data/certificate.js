export const certificateSection = {
  title: "Certificat",
  content : [{
    name: "Maturité pro",
    date: "27 juin 2025",
    image: "../image/matu_pro.png"
  },{
    name: "CFC géomaticien",
    date: "30 juin 2024",
    image: "../image/cfc.png"
  }, {
    name: "Python for ArcGIS",
    date: "1er novembre 2023",
    image: "../image/certificat_python_for_arcgis.png"
  }
]
}

export function createCertificateSection(certificateSection) {
  let certificateHTML = "" 
  certificateSection.content.forEach(element => {

    certificateHTML += `
    <div class="grid-item">

      <img class="certificate" src=${element.image}></img>
      <div class="text-container">
        <p class="name">${element.name}</p>
        <p class="date">Obtenu le ${element.date}</p>
      </div>    
    </div>
    `

  });

  const sectionHTML =`
  <div class="section-content">
    <h1>${certificateSection.title}</h1>
    <div class="content-container">${certificateHTML}</div>
  </div>
  `


  document.getElementById("certificate-section").innerHTML = sectionHTML
}