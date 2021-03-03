import React from 'react'
import PropTypes from 'prop-types'

function ProjectDetail(props) {
  const {
    backgroundColor,
    cover,
    description,
    name,
    type,
    website,
  } = props

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1 className="project-detail__title">{name}</h1>
        <h3 className="project-detail__type">{type}</h3>
      </div>
      <div
        className="project-detail__cover"
        style={{ background: backgroundColor }}
      >
        <img src={cover} alt="" className="project-detail__image" />
      </div>
      <p className="project-details__description">{description}</p>
      {/* project images */}
      {
        website && (
          <div className="project-detail__more-info">
            <div>
              <span className="project-detail__see-this">Do you want to see</span>
              &nbsp;
              <span className="project-detail__see-this project-detail__see-this--dark">
                this?
              </span>
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
        )
      }
    </div>
  )
}

ProjectDetail.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
}

export default ProjectDetail
