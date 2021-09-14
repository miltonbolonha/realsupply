import { React } from '../dependencies'
import { FaToolbox } from 'react-icons/fa'
// import DarkMode from '../containers/darkmode'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MenuContainer from '../containers/MenuContainer'

import { StaticImage } from 'gatsby-plugin-image'

const Header = ({
	logo,
	menuImg,
	Hero,
	refState,
	handleRefState,
	darkCandleImg,
}) => {
	// const refImage = getImage(logo)
	// console.log(logo)
	return (
		<header>
			<div className="main-header">
				<div className="header-columns toggle-menu desktop-only"></div>

				<div className="header-columns">
					<a href="/" className="logo-link">
						{/*
						<GatsbyImage
							image={refImage}
							src={refImage}
							srcSet={refImage}
							alt="asd"
							className="newClass"
							imgStyle={{
								objectFit: 'contain',
							}}
							style={{
								height: 75,
								width: 75,
								position: 'relative',
							}}
						/> */}

						<StaticImage
							src="../../../../static/assets/images/real-supply-svg.svg"
							alt="Real Supply"
							width={284}
							// height={60}
							style={{ objectFit: 'contain' }}
						/>

						{/* <h1>Real Supply</h1> */}
					</a>
				</div>
			</div>

			<MenuContainer refState={refState} handleRefState={handleRefState} />

			{Hero}
		</header>
	)
}

export default Header
