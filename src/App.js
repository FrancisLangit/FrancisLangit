import { data } from './data.js';
import style from './App.module.css';

import { Header } from './components/Header/Header.js';
import { Project } from './components/Project/Project';

const App = () => {
  return (
    <div>
      <Header />
      <div className={style.projects}>
        {data.map((project) => (
          <Project
            key={project.id}
            banner={project.banner}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
