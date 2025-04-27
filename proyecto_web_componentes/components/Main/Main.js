import "./Main.css";
import data from "../../data/data";

const { workExperience, skills, projects } = data;

const Main = () => `
    <main>
        <section id="work-experience">
            <h2>Experiencia Laboral</h2>
            ${workExperience.map((job) => `
                <div class="job">
                    <h3>${job.position}</h3>
                    <h4>${job.company}</h4>
                    <p>${job.startDate} - ${job.endDate}</p>
                    <p>${job.description}</p>
                </div>`
              ).join("")}
        </section>

        <section id="skills">
            <h2>Habilidades</h2>
            <ul>
                ${skills.map((skill) => `<li>${skill}</li>`).join("")}
            </ul>
        </section>

        <section id="projects">
            <h2>Proyectos</h2>
            ${projects.map((project) => `
                <div class="project">
                    <img src="${project.preview}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">VER PROYECTO</a>
                </div>`
              ).join("")}
        </section>
    </main>
`

export default Main;