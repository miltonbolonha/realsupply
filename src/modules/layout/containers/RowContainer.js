import { React } from '../dependencies'

import LayoutContext, { LayoutProvider } from '@Layout/services/LayoutContext'
import Row from '../components/Row'
// import { Page__Settings } from '../config/'
// import useSetLocation from '@tools/useSetLocation'

const RowContainer = ({
	children,
	opt,
	querySelector,
	sectionTitle,
	setLocation,
}) => {
	const data = {
		wrapperRef: null,
		handleRefState: null,
		refState: null,
		// application configs
		scroll: true,
		resize: true,
		outsideClick: true,
		hasOverlay: false,
		mouseDown: {
			on: true,
			clickElement: '.menu-wrapper',
		},
		location: 'Layout Location',
		rowHeading: null,
		headingOn: null,
		backgroundColor: '#000',
		color: '#fff',
		layoutType: null,
		alignContent: null,
		specialDisplay: null, // tirar isso e colocar no bloco ( carousel or column )
		numberOfColumns: null,
	}

	const defaulHeading = sectionTitle || 'sEM tÍTUlo'
	let rowHeading = null
	let defaultBgColor = 'white'
	let theme__color = false
	if (data && data.query) {
		if (data.query[0].backgroundColor && !opt.bgColor) {
			defaultBgColor = 'row_color__' + data.query[0].backgroundColor
			theme__color = true
		} else if (opt.bgColor) {
			defaultBgColor = opt.bgColor
			theme__color = false
		} else {
			defaultBgColor = 'white'
			theme__color = false
		}

		if (data.query[0].headingOn) {
			if (data.query[0].rowHeading) {
				rowHeading = data.query[0].rowHeading
			} else {
				rowHeading = defaulHeading
			}
		}
	}

	const params = {
		element: 'divisor',
		rowHeading: data ? rowHeading : defaulHeading,
	}

	const optNormatize = {
		elementClass: opt.classes || null,
		boxed: opt.isBoxed || false,
		bgColor: theme__color,
		numColumns: opt.numColumns || 1,
		alignTo: opt.alignTo || 'left',
	}

	const bgOpt = {
		theme_color: defaultBgColor,
		value_bgColor: opt.bgColor,
		background: opt.bgImg,
	}
	// console.log(defaultBgColor)
	return (
		<LayoutProvider>
			<LayoutContext.Consumer>
				{(value) => {
					// const handleLocation = setLocation ? setLocation : locationDefault
					// toggleLocation
					// console.log( 'zzzzzzimmmmmmmm' )
					// console.log(value)
					return (
						<>
							<Row
								children={children}
								params={params}
								opt={optNormatize}
								bgOpt={bgOpt}
								bgImg={opt.bgImg}
							/>
						</>
					)
				}}
			</LayoutContext.Consumer>
		</LayoutProvider>
	)
}

export default RowContainer
