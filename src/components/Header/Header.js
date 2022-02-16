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
      <Link
        link="https://docs.google.com/document/d/10_670hzfWdriOqLbOvX2ZBGpbhxrJlTf6ilwj6Uc74k/export?format=pdf"
        text="Resume"
      />
      <Link link="mailto:francis.villanueva.langit@gmail.com" text="Email" />
    </div>
  );
};

export { Header };
