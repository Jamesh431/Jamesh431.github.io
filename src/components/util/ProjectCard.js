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
    <div className="project-wrapper">
      <div className="project-name">{project_name}</div>

      <div className="project-type">{project_type}</div>

      {company ? <div className="company">{company}</div> : null}

      <div className="description">{description}</div>

      <div accomplishments>{accomplishments}</div>

      {hostedURL ? <div className="hosted-link">{hostedURL}</div> : null}

      {githubRepoURL ? (
        <div className="github-repo-link">{githubRepoURL}</div>
      ) : null}
    </div>
  );
}
