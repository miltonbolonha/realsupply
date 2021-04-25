import { React, useEffect, useRef } from '../dependencies'

import LayoutContext from '@Layout/services/LayoutContext'

import slugify from '@tools/slugify'
import grabHorizontalScroll from '@tools/grabHorizontalScroll'

import ABimg from '../components/ABimg'
import ABheading from '../components/ABheading'
import ABparagraph from '../components/ABparagraph'
import ABlink from '../components/ABlink'
import ABform from '../components/ABform'

const ABblockcontainer = ({
	data,
	params,
	querySelector, // remover a necessidade no grab
}) => {
	if (data && params) {
		let wrapperRef = null
		const gridType = params.isCarousel ? 'carousel' : 'columns'
		const elementClass = params.sliderClass || null
		const formName = data.formID ? slugify(data.formID) : null
		const gridClass = 'grid-' + gridType + '-item'
		const wrapperClass = 'grid-' + gridType + ' ' + elementClass
		const listClass =
			'grid-' +
			gridType +
			'-list ' +
			elementClass +
			'-list no-pdd-mrg-first-last-child'

		let MainWrapper = null
		let ItemWrapper = null
		let Column = null
		let Carousel = null

		let img = null
		let heading = null
		let paragraph = null
		let link = null
		let form = null

		Column = ({ children }) => (
			<div
				className={wrapperClass}
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: params.alignTo,
				}}
			>
				{children}
			</div>
		)

		Carousel = ({ children }) => (
			<div className={wrapperClass}>
				<ul ref={wrapperRef} className={listClass}>
					{children}
				</ul>
			</div>
		)

		if (gridType && gridClass) {
			const basis = 100 / params.numColumns
			if (gridType === 'carousel') {
				ItemWrapper = ({ children }) => (
					<li className={gridClass}>{children}</li>
				)
			} else if (gridType === 'columns') {
				ItemWrapper = ({ children }) => (
					<div className={gridClass} style={{ flexBasis: basis + '%' }}>
						{children}
					</div>
				)
			}
		}

		if (params.isCarousel) {
			function GridContentSlider(ref, qSel) {
				useEffect(() => {
					grabHorizontalScroll(qSel)
				})
			}
			MainWrapper = Carousel
			wrapperRef = useRef(null)
			GridContentSlider(wrapperRef, querySelector)
		} else {
			MainWrapper = Column
		}

		return (
			<>
				<MainWrapper>
					{data.map((e, i) => {
						if (e.srcSet && e.sizes && e.src) {
							const alt = e.alt ? e.alt : 'image desciption'

							img = {
								order: params.order.img || 1,
								element: (
									<ABimg
										elementClass={elementClass}
										srcSet={e.srcSet}
										sizes={e.sizes}
										src={e.src}
										alt={alt}
									/>
								),
							}
						}

						if (e.heading) {
							heading = {
								order: params.order.heading || 2,
								element: (
									<ABheading
										elementClass={elementClass}
										heading={e.heading}
										fontSize={e.fontSize}
										fontColor={e.fontColor}
									/>
								),
							}
						}

						if (e.paragraph) {
							paragraph = {
								order: params.order.paragraph || 3,
								element: (
									<ABparagraph
										elementClass={elementClass}
										paragraph={e.paragraph}
									/>
								),
							}
						}

						if (e.link && e.linkText) {
							link = {
								order: params.order.link || 4,
								element: (
									<ABlink
										elementClass={elementClass}
										link={e.link}
										linkText={e.linkText}
									/>
								),
							}
						}

						if (formName && e.formID && e.form) {
							form = {
								order: params.order.form || 5,
								element: (
									<ABform name={formName} formId={e.formID} form={e.form} />
								),
							}
						}

						function compare(a, b) {
							let comparison = 0

							if (a && b) {
								const elementA = a.order
								const elementB = b.order
								if (elementA > elementB) {
									comparison = -1
								} else if (elementA < elementB) {
									comparison = 1
								}
							} else if (a && !b) {
								comparison = -1
							} else if (b && !a) {
								comparison = 1
							}

							return comparison
						}

						const blockElements = [img, heading, paragraph, link, form]

						blockElements.sort(compare)

						return (
							<div key={i}>
								<LayoutContext.Consumer>
									{(value) => {
										if (e.backgroundColor) {
											value.handleBgColor(e.backgroundColor)
										}
										// console.log(value)
										return (
											<>
												{blockElements.map((el, key) => {
													if (el !== null) {
														return (
															<ItemWrapper key={key} ItemWrapper={ItemWrapper}>
																{el.element}
															</ItemWrapper>
														)
													} else {
														return null
													}
												})}
											</>
										)
									}}
								</LayoutContext.Consumer>
							</div>
						)
					})}
				</MainWrapper>
			</>
		)
	} else {
		return null
	}
}
export default ABblockcontainer
