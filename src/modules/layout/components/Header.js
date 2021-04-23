import { React, Img } from '../dependencies'

import DarkMode from '../containers/darkmode'
import MenuContainer from '../containers/MenuContainer'

const Header = ({ menuImg, Hero, refState, handleRefState, darkCandleImg }) => (
	<header>
		<div className="main-header">
			<div className="header-columns toggle-menu">
				<input
					type="checkbox"
					id="check-toggle-icon"
					onChange={handleRefState}
				/>
				<label htmlFor="check-toggle-icon" className="menu-wrapper">
					<div className="toggle-icon">
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
					<div className="icon-text desktop-only">
						outro
						{/* <Img
              fixed={menuImg.childImageSharp.fixed}
              width={menuImg.childImageSharp.fixed.width}
              height={menuImg.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
						{/* <strong>Ferramentas</strong> */}
					</div>
				</label>
			</div>

			<div className="header-columns">
				<a href="/" className="logo-link">
					<h1>Real Supply</h1>
				</a>
			</div>
			<div className="header-columns">
				<strong>
					<a href="#" className="cart-link">
						Roteiro
					</a>
				</strong>
				<DarkMode darkCandleImg={darkCandleImg} />
			</div>
		</div>

		<MenuContainer refState={refState} handleRefState={handleRefState} />

		{Hero}
	</header>
)

export default Header
