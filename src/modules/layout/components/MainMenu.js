import { React } from '../dependencies'

const MainMenu = ({ wrapperRef, isVisibleClass }) => (
	<nav ref={wrapperRef} className={' main-nav menu-state-' + isVisibleClass}>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
					<br />- Meme
					<br />- gif
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>
			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>
		</ul>
		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-main-link" href="/">
					item 01
				</a>
			</li>
		</ul>
	</nav>
)

export default MainMenu
