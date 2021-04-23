// eslint-disable-next-line
import { React } from '../dependencies.js'

import SeoContainer from '../containers/SeoContainer'

const Body = ({ children }) => (
	<>
		<link
			rel="stylesheet"
			href="https://use.typekit.net/ida3ckg.css"
			type="text/css"
		></link>
		<SeoContainer title="Home" />
		{children}
	</>
)
export default Body
