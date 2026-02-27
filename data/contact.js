export const contactSection = {
    title: "Contact",
    content: [
        "+41 79 884 49 42",
        "amezdrozarnaud@gmail.com",
        "Vaud, Suisse"
    ]
}

export function createContactSection(contactSection) {
    let textHTML = "" 
    const contactLen = contactSection.content.length - 1
    contactSection.content.forEach((element, id) => {
      const textValue = `
      <p>${element}</p>
      ${contactLen === id ? '' : `<span class="divider"></span>`}
      `
      textHTML += textValue
    });
    
    const sectionHTML =`
    <div class="section-content">
      <h1>${contactSection.title}</h1>
      <div class="content-container">
        <div class="text-container">${textHTML}</div>
      </div>
    </div>
    `
  
  
    document.getElementById("contact-section").innerHTML = sectionHTML
  }