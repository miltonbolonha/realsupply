import { React } from './dependencies'
import LayoutResolver from './containers/'

const Layout = ({
	children,
	opt,
	type,
	querySelector,
	sectionTitle,
	setLocation,
	logo,
}) => {
	return (
		<LayoutResolver
			children={children}
			logo={logo}
			opt={opt}
			type={type}
			querySelector={querySelector}
			sectionTitle={sectionTitle}
			setLocation={setLocation}
		/>
	)
}

export default Layout
