import React, { memo } from 'react'

import { EMAIL, LINKEDIN } from 'constants/SocialNetwork'
import IconLinkedin from 'assets/icons/linkedin-alt.png'

function FooterInternal() {
  return (
    <div className="footer-internal">
      <div className="footer-internal__wrapper">
        <div className="footer-internal__contact">
          <span className="footer-internal__item">
            Email:
          </span>
          <span>
            <a
              className="footer-internal__data"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </span>
        </div>
        <div className="footer-internal__contact">
          <span className="footer-internal__item">
            Follow Us:
          </span>
          <span className="footer-internal__data">
            <a href={LINKEDIN}>
              <img
                className="footer-internal__linkedin"
                src={IconLinkedin}
                alt="Linkedin link"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default memo(FooterInternal)
