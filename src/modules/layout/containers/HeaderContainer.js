// import { Link } from "gatsby"
import { React, useState } from '../dependencies'
// import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'

const HeaderContainer = ({ data }) => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Header Hero={data} refState={refState} handleRefState={handleRefState} />
	)
}
export default HeaderContainer
