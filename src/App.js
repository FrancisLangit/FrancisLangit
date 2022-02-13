import { nanoid } from 'nanoid';

import { data } from './data.js';

import { Project } from './components/Project/Project';
import { Search } from './components/Search/Search.js';

const App = () => {
  return (
    <div>
      <Search />
      {data.map((project) => (
        <Project
          key={nanoid()}
          banner={project.banner}
          name={project.name}
          description={project.description}
          tags={project.tags}
          source={project.source}
          demo={project.demo}
        />
      ))}
    </div>
  );
};

export default App;
