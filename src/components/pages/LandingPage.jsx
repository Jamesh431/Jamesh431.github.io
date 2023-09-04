import projects from "../helpers/projects";
import ProjectCard from "../util/ProjectCard";
import MountCertificates from "../util/MountCertificates";
import certsArray from "../helpers/certficatesArray";

function mountProjectsInformation() {
  return projects.map((project, idx) => (
    <ProjectCard key={idx} data={project} />
  ));
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="projects-container">
        {mountProjectsInformation(certsArray)}
      </div>

      <div className="certificates-container">
        <MountCertificates list_of_data={certsArray} />
      </div>
    </div>
  );
}
