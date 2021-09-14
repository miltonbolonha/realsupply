// eslint-disable-next-line
import { React, PropTypes } from '../dependencies.js'

import SeoContainer from '../containers/SeoContainer'
import GlobalContext from '../services/context'
import Body from '../components/Body'

const BodyContainer = ({ children, opt }) => {
	return (
		<GlobalContext.Consumer>
			{(value) => (
				<>
					<SeoContainer title={opt.titleSeo} />

					<Body opt={opt}>{children}</Body>
				</>
			)}
		</GlobalContext.Consumer>
	)
}
export default BodyContainer
