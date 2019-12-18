import React from 'react'
import { Link } from "gatsby"
import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.title} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h3>{item.title}</h3>  
          <p>{item.text}</p>
          <div class="field is-grouped">
          {item.tag
           ? <p class="control"><Link class="button" to={`/tags/${kebabCase(item.tag)}/`}>Blog Posts</Link></p>
           : null }
          {item.link
           ? <p class="control"><a class="button" target="_blank" href={item.link}>GitHub</a></p>
           : null }
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
      tag: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default FeatureGrid
