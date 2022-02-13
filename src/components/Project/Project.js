const Project = ({
  banner,
  name,
  description,
  technologies,
  repository,
  demo,
}) => {
  return (
    <div>
      <img src={banner} alt={name + 'banner'} />
      <div>{name}</div>
      <div>{description}</div>
      {technologies.map((technology) => (
        <div>{technology}</div>
      ))}
      <a href={repository}>
        <div>Source Code</div>
      </a>
      <a href={demo}>
        <div>Demo</div>
      </a>
    </div>
  );
};

export { Project };
