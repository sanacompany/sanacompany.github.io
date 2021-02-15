import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="footer">
      <span className="footer__copyright">
        {`${year} © All rights reserved. Sanacompany.`}
      </span>
    </div>
  )
}
