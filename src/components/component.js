import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div
      id="scroll"
      onclick="  document.getElementById('#music').play()"
      className={`app-component-container ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="app-component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  image_alt: 'image',
  image_src: '/chevron%20down.svg',
  rootClassName: '',
  Scroll: 'You Are Invited To Our Wedding',
}

AppComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Scroll: PropTypes.string,
}

export default AppComponent
