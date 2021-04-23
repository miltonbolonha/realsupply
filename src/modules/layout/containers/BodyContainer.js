// eslint-disable-next-line
import { React, PropTypes } from '../dependencies.js' 

import GlobalContext from '../services/context'
import Body from "../components/Body"

export default ({ children }) => {

  return (
    <GlobalContext.Consumer>
      { value => (
        <Body>
           {children}
        </Body>
      )}
    </GlobalContext.Consumer>
  )
}