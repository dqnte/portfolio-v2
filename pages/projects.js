import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@material-ui/icons/Close';

import Dopaliscious from './dopaliscious';
import Coreo from './coreo';
import CityHall from './cityHall';
import Photography from './photography';

export default function Projects() {
  const [project, setProject] = useState(0);
  const [unmounting, unmountProject] = useState(false);

  const handleClick = id => {
    window.scrollTo(0, window.innerHeight);

    if (id === 0) {
      unmountProject(true);
      setTimeout(() => {
        setProject(0);
        unmountProject(false);
      }, 300);
    } else {
      setProject(id);
    }
  };

  const projectList = [
    {
      id: 1,
      title: 'dopaliscious',
      component: <Dopaliscious />,
    },
    { id: 2, title: 'la city hall', component: <CityHall /> },
    { id: 3, title: 'coreo', component: <Coreo /> },
    { id: 4, title: 'nanas' },
    { id: 5, title: 'compression' },
    { id: 6, title: 'stock picker' },
    { id: 7, title: 'photography', component: <Photography /> },
  ];

  return (
    <div
      id="projects"
      className={unmounting ? 'unmounting' : project === 0 ? 'show-all' : ''}
    >
      {projectList.map(item => (
        <div
          id={item.id}
          key={item.id}
          className={`name${project === item.id ? ' visible' : ''}`}
          style={{ top: `${item.id * 70}px` }}
        >
          <h2 onClick={() => handleClick(item.id)}>{item.title}</h2>
          <button type="button" onClick={() => handleClick(0)}>
            <CloseIcon />
          </button>
        </div>
      ))}

      <div className={`project-display${project !== 0 ? ' visible' : ''}`}>
        {project > 0 && projectList[project - 1].component}
      </div>
    </div>
  );
}
