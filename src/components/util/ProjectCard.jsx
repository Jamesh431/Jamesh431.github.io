export default function LandingPage(props) {
  const { data } = props;
  const {
    project_name,
    project_type,
    company,
    description,
    accomplishments,
    hostedURL,
    githubRepoURL,
  } = data;

  return (
    <div className="project-wrapper" key={project_name}>
      <div className="project-name">
        <p>{project_name}</p>
      </div>

      {company ? (
        <div className="company">
          <p>{company}</p>
        </div>
      ) : null}

      <div className="description">
        <p>{description}</p>
      </div>

      <div accomplishments>
        <p>{accomplishments}</p>
      </div>

      <div className="project-type">
        <p>{project_type}</p>
      </div>

      {hostedURL ? (
        <div className="hosted-link">
          <a href={hostedURL} target="_blank" rel="noreferrer">
            Hosted Site (Globe)
          </a>
        </div>
      ) : null}

      {githubRepoURL ? (
        <div className="github-repo-link">
          <a href={githubRepoURL} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </div>
      ) : null}
    </div>
  );
}
