import { nanoid } from 'nanoid';
import styles from './Project.module.css';

const Project = ({ banner, name, description, tags, source, demo }) => {
  return (
    <div>
      <img src={banner} alt={name + ' banner'} className={styles.banner} />
      <div>{name}</div>
      <div>{description}</div>
      {tags.map((tag) => (
        <span key={nanoid()}>{tag} | </span>
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
