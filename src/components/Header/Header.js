import style from './Header.module.css';

const Link = ({ link, text }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={style.link}
    >
      <span>{text}</span>
    </a>
  );
};

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>Francis Langit</div>
      <Link link="https://www.linkedin.com/in/francis-langit" text="LinkedIn" />
      <Link link="https://github.com/FrancisLangit/" text="GitHub" />
      <Link link="mailto:francis.villanueva.langit@gmail.com" text="Email" />
    </div>
  );
};

export { Header };
