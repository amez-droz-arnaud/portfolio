export const projectData = {
  title: "Projet",
  content : [{
    name: "MNT complet",
    index: "01",
    page: "/page/mnt-complet.html"
  }, {
    name: "Dashboard Viageo",
    index: "02",
    page: "/page/dashboard-viageo.html"
  }, {
    name: "Contrôle qualité structurelle",
    index: "03",
    page: "./page/controle-qualite.html"
  }, {
    name: "Orthophoto MAN",
    index: "04",
    page: "/page/orthophoto-man.html"
  }, {
    name: "Where2Play",
    index: "05",
    page: "/page/where2play.html"
  }
]}

export const footerHTML =`
<div class="footer-info">
    <a class="contact-info" href="/">projet</a>
    <a class="contact-info" href="/page/about.html">à propos</a>
    <a class="contact-info" href="mailto:amezdrozarnaud@gmail.com">amezdrozarnaud@gmail.com</a>
</div>
`

export const navHTML =`
<nav>
    <a href="/">Amez-Droz Arnaud</a>
    <a href="/page/about.html">à propos</a>
</nav>
`


export const contactButtonHTML = `
<a class="contact-button" href="mailto:amezdrozarnaud@gmail.com">
    <span>Me contacter</span>
    <div class="spacer"></div>
    <svg class="arrow-icon" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/>
    </svg>
</a>
`

export const aboutHTML = `
<div class="about-container">
    <h1 class="title">À propos</h1>
    <div class="about-info">
        <p>J'ai découvert la géomatique complètement par hasard. Un hasard qui m'a ouvert les portes d'un domaine pour lequel je me suis passionné. Les géodonnées sont de puissants vecteurs d'aide à la décision, mais elles sont trop souvent sous-exploitées. J'aime explorer ces informations et les transformer en outils concrets et utiles.</p>
        <p>Le domaine étant étroitement lié à l'informatique, je n'hésite pas à écrire du code lorsque les outils standards ne suffisent plus à répondre aux besoins. J'ai d'ailleurs une fâcheuse tendance à vouloir automatiser au maximum les tâches qui me sont confiées.</p>
    </div>
</div>
`