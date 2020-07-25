import React, { useEffect, useState } from 'react';

export default function Projects(props) {
  const { projectList } = props;

  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    setTimeout(() => setMounting(false), 350);
  }, []);

  return (
    <div id="projects" className={props.hide || mounting ? 'hide' : 'show'}>
      {projectList.map(proj => {
        return (
          <div
            className="project-button"
            style={{ backgroundColor: proj.backColor }}
            key={proj.id}
            onClick={() => {
              props.selectView(proj);
            }}
          >
            <div className="description" style={{ color: proj.color }}>
              <h3>
                {proj.title}
                <span style={{ backgroundColor: proj.accent }} />
              </h3>

              {proj.description}
            </div>
            <img src={proj.buttonUrl} />
          </div>
        );
      })}
    </div>
  );
}
