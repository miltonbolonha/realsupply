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
				<div className="header-columns toggle-menu desktop-only">
					<input
						type="checkbox"
						id="check-toggle-icon"
						onChange={handleRefState}
					/>
					<label
						htmlFor="check-toggle-icon"
						className={`menu-wrapper ${refState ? 'active' : 'not-active'}`}
					>
						<div className="menu-bar-icon">
							<FaToolbox className="FaToolbox icon-main-menu-left" />
						</div>
						<div className="icon-text desktop-only">
							<strong>Suprimentos</strong>
						</div>
					</label>
				</div>

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
				<div className="header-columns desktop-only">
					<strong>
						<a href="/" className="contact-button">
							Fale Conosco
						</a>
					</strong>
					{/* <DarkMode darkCandleImg={darkCandleImg} /> */}
				</div>
			</div>

			<MenuContainer refState={refState} handleRefState={handleRefState} />

			{Hero}
		</header>
	)
}

export default Header
