import { React } from '../dependencies'
import BodyContainer from '../containers/BodyContainer'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import RowContainer from '../containers/RowContainer'
import FormContainer from '../containers/FormContainer'

const LayoutResolver = ({
	children,
	opt,
	type,
	querySelector,
	sectionTitle,
	setLocation,
	logo,
}) => {
	function renderComponent(renderThis) {
		switch (renderThis) {
			case 'BODY':
				return <BodyContainer children={children} opt={opt} />
			case 'FOOTER':
				return <FooterContainer />
			case 'HEADER':
				return <HeaderContainer heroData={opt} logo={logo} />
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
			case 'FORM':
				return <FormContainer heroData={opt} />
			default:
				return console.log(renderThis)
		}
	}
	return <>{renderComponent(type)}</>
}
export default LayoutResolver
