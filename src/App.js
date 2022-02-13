import { data } from './data.js';
import { Project } from './components/Project/Project';

const App = () => {
  return (
    <div>
      {data.map((project) => (
        <Project
          banner={project.banner}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          repository={project.repository}
          demo={project.demo}
        />
      ))}
    </div>
  );
};

export default App;
