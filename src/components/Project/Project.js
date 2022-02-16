import style from './Project.module.css';

const Project = ({ banner, name, link }) => {
  return (
    <div className={style.container}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={style.banner} src={banner} alt={name + ' banner'} />
      </a>
    </div>
  );
};

export { Project };
