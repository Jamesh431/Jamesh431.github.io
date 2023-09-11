import projects from "../helpers/projects";
import ProjectCard from "../util/ProjectCard";
import MountCertificates from "../util/MountCertificates";
import certsArray from "../helpers/certficatesArray";
import Carousel from "../customComponents/Carousel";
import CarouselSlide from "../customComponents/CarouselSlide";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="projects-container">
        <Carousel
          data={projects}
          views={{
            504: 2,
            768: 2,
            1024: 3,
            1440: 3,
            2560: 3,
          }}
        >
          <CarouselSlide card={ProjectCard} title="Title" />
        </Carousel>
      </div>

      <div className="certificates-container">
        <div className="certificates-spacer">
          <MountCertificates list_of_data={certsArray} />
        </div>
      </div>
    </div>
  );
}
