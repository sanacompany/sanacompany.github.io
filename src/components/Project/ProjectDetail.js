import React from 'react'
import PropTypes from 'prop-types'

import AppStoreIcon from 'assets/icons/app-store.png'
import PlayStoreIcon from 'assets/icons/play-store.png'

function ProjectDetail(props) {
  const { appStore, elements, name, playStore, type, website } = props

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

      {
        (playStore || appStore) && (
          <div className="project-detail__more-info">
            <div>
              <span className="project-detail__see-this">Do you want to see</span>
              &nbsp;
              <span className="project-detail__see-this project-detail__see-this--dark">this?</span>
            </div>
            <div className="project-detail__store-buttons">
              {
                playStore && (
                  <a
                    href={playStore}
                    className="project-detail__store-button project-detail__store-button--play-store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="project-detail__store-button-content project-detail__store-button-content--play-store">
                      <img src={PlayStoreIcon} className="project-detail__store-icon" alt="Google Play Store logo" />
                      &nbsp;
                      Visit Google Store
                    </div>
                  </a>
                )
              }
              {
                appStore && (
                  <a
                    href={appStore}
                    className="project-detail__store-button project-detail__store-button--app-store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="project-detail__store-button-content project-detail__store-button-content--app-store">
                      <img src={AppStoreIcon} className="project-detail__store-icon" alt="App Store logo" />
                      &nbsp;
                      Visit App Store
                    </div>
                  </a>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

ProjectDetail.propTypes = {
  appStore: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  playStore: PropTypes.string,
  type: PropTypes.string.isRequired,
  website: PropTypes.string,
}

ProjectDetail.defaultProps = {
  appStore: '',
  playStore: '',
  website: '',
}

export default ProjectDetail
