const Project = ({ banner, name, description, technologies, source, demo }) => {
  return (
    <div>
      <img src={banner} alt={name + 'banner'} />
      <div>{name}</div>
      <div>{description}</div>
      {technologies.map((technology) => (
        <div>{technology}</div>
      ))}
      <a href={source}>
        <div>Source Code</div>
      </a>
      {demo ? (
        <a href={demo}>
          <div>Demo</div>
        </a>
      ) : null}
    </div>
  );
};

export { Project };
