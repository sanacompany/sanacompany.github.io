import React from 'react'
import PropTypes from 'prop-types'

function ProjectCard({ project }) {
  const {
    color,
    cover,
    name,
    type
  } = project

  return (
    <div className="project-card">
      <div className="project-card__cover" style={{ background: color }}>
        <img className="project-card__image" src={cover} alt="" />
      </div>
      <span className="project-card__name">{name}</span>
      <span className="project-card__type">{type}</span>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
}

export default ProjectCard
