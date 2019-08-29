import React from 'react'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({
  about_image,  
  title,
  description,
}) => {
  return (
    <section className='about section'>
      <div className='container'>
        <div className='columns'>
          <div className='img-col column'>
            <img src={about_image} alt='about_image' />
          </div>
          <div className='description-col column'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default AboutPageTemplate
