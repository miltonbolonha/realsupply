// import { Link } from "gatsby"
import { React, PropTypes, useState } from '../dependencies'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'

const HeaderContainer = ({ data }) => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}

	// const icons = useStaticQuery(graphql`
	//   fragment iconsTool on File {
	//     childImageSharp {
	//       fixed(width: 64) {
	//         base64
	//         tracedSVG
	//         aspectRatio
	//         width
	//         height
	//         src
	//         srcSet
	//         srcWebp
	//         srcSetWebp
	//       }
	//     }
	//   }
	//
	//   query {
	//     menuzim: file(relativePath: { eq: "theme/icons/chest.png" }) {
	//       ...iconsTool
	//     }
	//     darkCandle: file(relativePath: { eq: "theme/icons/candle.png" }) {
	//       ...iconsTool
	//     }
	//   }
	// `)

	// const menuImg = icons.menuzim
	// const darkCandleImg = icons.darkCandle

	return (
		<Header
			// logoImg={logoImg}
			// menuImg={menuImg}
			// darkCandleImg={darkCandleImg}
			Hero={data}
			refState={refState}
			handleRefState={handleRefState}
		/>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default HeaderContainer
