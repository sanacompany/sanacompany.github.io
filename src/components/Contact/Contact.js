import React from 'react'

import { EMAIL, LINKEDIN } from 'constants/SocialNetwork'
import IconEmail from 'assets/icons/email.png'
import IconLinkedIn from 'assets/icons/linkedin.png'
import IconHole from 'assets/icons/hole.png'

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="section-title">
        <h3 className="section-title__number">04</h3>
        <h4 className="section-title__title">Contact Us</h4>
      </div>
      <div className="contact__note">
        <div className="contact__hole-container">
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
          <img src={IconHole} alt="hole icon" />
        </div>
        <div className="contact__information">
          <a href={`mailto:${EMAIL}`}>
            <img
              src={IconEmail}
              className="contact__icon"
              alt="email icon"
            />
          </a>
          <span className="contact__text">{EMAIL}</span>
        </div>
        <div className="contact__information">
          <a href={LINKEDIN}>
            <img
              src={IconLinkedIn}
              className="contact__icon"
              alt="linkedin icon"
            />
          </a>
          <span className="contact__text">Sanacompany</span>
        </div>
      </div>
    </div>
  )
}
