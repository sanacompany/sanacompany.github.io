import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  const { color, cover, name, type, slug } = project

  return (
    <Link className="project-card" to={`/project/${slug}`}>
      <div className="project-card__cover" style={{ background: color }}>
        <img className="project-card__image" src={cover} alt={name} />
        <div className="project-card__shadow" />
      </div>
      <span className="project-card__name">{name}</span>
      <span className="project-card__type">{type}</span>
    </Link>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectCard
