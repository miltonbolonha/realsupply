import { React, PropTypes } from '../dependencies'
import { useStaticQuery, graphql } from 'gatsby'

import Seo from '../components/Seo'

function SeoContainer({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Seo
      lang={lang}
      title={title}
      siteTitle={site.siteMetadata.title}
      metaDescription={metaDescription}
      siteAuthor={site.siteMetadata.author}
      meta={meta}
    />
  )
}

SeoContainer.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SeoContainer.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SeoContainer
