// eslint-disable-next-line
import { React, PropTypes } from '../dependencies.js'

import GlobalContext from '../services/context'
import Body from '../components/Body'

const BodyContainer = ({ children }) => {
	return (
		<GlobalContext.Consumer>
			{(value) => <Body>{children}</Body>}
		</GlobalContext.Consumer>
	)
}
export default BodyContainer
