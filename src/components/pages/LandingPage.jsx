import projects from "../../helpers/projects";
import ProjectCard from "src/components/util/ProjectCard.js";

function mountProjectsInformation() {
  return projects.map((project) => ProjectCard(project));
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="projects-container">
        <div>{mountProjectsInformation()}</div>
      </div>
    </div>
  );
}
