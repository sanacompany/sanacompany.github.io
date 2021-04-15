import React from 'react'
import PropTypes from 'prop-types'

function ProjectDetail(props) {
  const { elements, name, type, website } = props

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1 className="project-detail__title">{name}</h1>
        <h3 className="project-detail__type">{type}</h3>
      </div>

      {elements.map((element) => (
        <div className="project-detail__element">
          <img src={element.image} alt="" className="project-detail__image" />
          <p className="project-details__description">{element.description}</p>
        </div>
      ))}

      {website && (
        <div className="project-detail__more-info">
          <div>
            <span className="project-detail__see-this">Do you want to see</span>
            &nbsp;
            <span className="project-detail__see-this project-detail__see-this--dark">this?</span>
          </div>
          <a
            href={website}
            className="project-detail__access-website"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>
        </div>
      )}
    </div>
  )
}

ProjectDetail.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  website: PropTypes.string,
}

ProjectDetail.defaultProps = { website: '' }

export default ProjectDetail
