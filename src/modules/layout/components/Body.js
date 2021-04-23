// eslint-disable-next-line
import { React } from '../dependencies.js' 

import SeoContainer from '../containers/SeoContainer'

export default ({ children }) => (
  <>
    <link rel="stylesheet" href="https://use.typekit.net/ida3ckg.css" type="text/css"></link>
    <SeoContainer title="Home" />
      {children}  
  </>
)
