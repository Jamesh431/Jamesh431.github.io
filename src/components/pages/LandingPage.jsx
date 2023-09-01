import projects from "../helpers/projects";
import ProjectCard from "../util/ProjectCard.js";

function mountProjectsInformation() {
  return projects.map((project, idx) => (
    <ProjectCard key={idx} data={project} />
  ));
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="certificates-container">
        <div className="certificate-wrapper">Foundations</div>

        <div className="certificate-wrapper">Front End</div>

        <div className="certificate-wrapper">Back End</div>
      </div>
      <div className="projects-container">{mountProjectsInformation()}</div>
    </div>
  );
}
