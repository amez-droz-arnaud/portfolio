
export function createProjectSection(projectData) {
  let projectHTML = "" 
  projectData.content.forEach(element => {

    projectHTML += `
    <div class="project">
        <span class="index">${element.index}</span>
        <a class="name" href="${element.page}" >${element.name}</a>
    </div>
    `

  });

  
  const sectionHTML =`
  <div class="project-container">
    <h1>${projectData.title}</h1>
    <div class="project-info">${projectHTML}</div>
  </div>
  `


  document.getElementById("project-section").innerHTML = sectionHTML
}


export function createFooter(projectData, footerInfoHTML) {
  let footerProjectHTML = "" 
  projectData.content.forEach(element => {

    footerProjectHTML += `
    <div class="project">
        <span class="index">${element.index}</span>
        <a class="name" href="${element.page}" >${element.name}</a>
    </div>
    `

  });

  const footerHTML =  `
    <div class="footer-container">
        <div class="project-container">
            ${footerProjectHTML}
        </div>
        ${footerInfoHTML}
    </div>
  `

  document.getElementById("footer").innerHTML = footerHTML;
}


export function zoomOnClick(){
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Ajouter le listener sur toutes les images de projet
    document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
    });

    // Fermer en cliquant sur l'overlay
    lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') lightbox.classList.remove('active');
    });
}