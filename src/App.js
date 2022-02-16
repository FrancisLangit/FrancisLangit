import { useState } from 'react';

import { data } from './data.js';

import { Header } from './components/Header/Header.js';
import { Project } from './components/Project/Project';
import { Search } from './components/Search/Search.js';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header />
      <Search value={search} setValue={setSearch} />
      {data
        .filter((project) => {
          const filter = `${project.tags.toString()},${project.name}`;
          return filter.toLowerCase().includes(search.toLowerCase());
        })
        .map((project) => (
          <Project
            key={project.id}
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
