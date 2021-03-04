import React from 'react'

import PROJECTS from 'constants/Projects'
import ProjectCard from 'components/Project/ProjectCard'

const list = PROJECTS

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <div className="section-title">
        <h3 className="section-title__number">03</h3>
        <h4 className="section-title__title">Portfolio</h4>
      </div>
      <div className="portfolio__list">
        {list.map((project) => (
          <ProjectCard
            key={`portfolio-${project.name}`}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}
