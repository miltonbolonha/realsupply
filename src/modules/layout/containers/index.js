import { React } from '../dependencies'
import BodyContainer from '../containers/BodyContainer'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import RowContainer from '../containers/RowContainer'

const LayoutResolver = ({
	children,
	opt,
	type,
	querySelector,
	sectionTitle,
	setLocation,
}) => {
	function renderComponent(renderThis) {
		switch (renderThis) {
			case 'BODY':
				return <BodyContainer children={children} />
			case 'FOOTER':
				return <FooterContainer />
			case 'HEADER':
				return <HeaderContainer data={opt} />
			case 'ROW':
				return (
					<RowContainer
						opt={opt}
						children={children}
						querySelector={querySelector}
						sectionTitle={sectionTitle}
						setLocation={setLocation}
					/>
				)
			default:
				return console.log(renderThis)
		}
	}
	return <>{renderComponent(type)}</>
}
export default LayoutResolver
