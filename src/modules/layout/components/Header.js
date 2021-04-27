import { React } from '../dependencies'
import { FaToolbox } from 'react-icons/fa'
// import DarkMode from '../containers/darkmode'
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
				<label
					htmlFor="check-toggle-icon"
					className={`menu-wrapper ${refState ? 'active' : 'not-active'}`}
				>
					<div className="menu-bar-icon">
						<FaToolbox className="FaToolbox" />
					</div>
					<div className="icon-text desktop-only">
						<strong>Suprimentos</strong>
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

export default Header
