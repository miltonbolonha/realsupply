import { React } from './dependencies'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import slugify from './slugify'

const InsertHTML = ({ type, params, opt, children, bgOpt, bgImg }) => {
	const elementClass = opt ? opt.elementClass : type

	switch (type) {
		case 'img':
			if (params.srcSet && params.sizes && params.src) {
				const alt = params.alt ? params.alt : 'image desciption'
				return (
					<img
						className={elementClass}
						srcSet={params.srcSet}
						sizes={params.sizes}
						src={params.src}
						alt={alt}
					/>
				)
			} else {
				return null
			}
		case 'heading':
			if (params.heading) {
				return <h2 className={elementClass}>{params.heading}</h2>
			} else {
				return null
			}
		case 'paragraph':
			if (params.paragraph) {
				return (
					<div
						className={elementClass}
						dangerouslySetInnerHTML={{ __html: params.paragraph }}
					></div>
				)
			} else {
				return null
			}
		case 'link':
			if (params.link && params.linkText) {
				return (
					<a className={elementClass} href={params.link}>
						{params.linkText}
					</a>
				)
			} else {
				return null
			}
		case 'row':
			const SubRow = ({ children, element, numColumns, rowWidth }) => {
				switch (element) {
					case 'list':
						return <li className={rowWidth + '-child'}>{children}</li>
					default:
						return <div className={rowWidth + '-child'}>{children}</div>
				}
			}
			if (params.element && children) {
				const rowWidth = opt.boxed ? 'boxed-column' : 'full-width-row'
				const heading = params.rowHeading ? (
					<h2 className="row-heading">{params.rowHeading} </h2>
				) : null

				switch (params.element) {
					case 'list':
						return (
							<ul
								className={
									rowWidth +
									' ' +
									elementClass +
									' align-to-' +
									opt.alignTo +
									' responsive-padding' +
									' ' +
									bgOpt.value_bgColor
										? bgOpt.theme_color
										: ''
								}
								style={{
									backgroundColor: bgOpt.theme_color
										? null
										: bgOpt.value_bgColor,
								}}
							>
								{heading}
								<SubRow
									children={children}
									element={params.element}
									numColumns={opt.numColumns}
									rowWidth={rowWidth}
								/>
							</ul>
						)
					case 'divisor':
						// console.log('bgOpt.theme_colors')
						// console.log(bgImg.datas || null)
						const refImage = bgImg ? getImage(bgImg.datas) : null
						return (
							<div
								className={`${rowWidth} ${elementClass} align-to-${
									opt.alignTo
								} responsive-padding ${
									bgOpt.value_bgColor ? bgOpt.theme_color : ''
								}`}
								style={{
									backgroundColor: bgOpt.theme_color
										? bgOpt.value_bgColor
										: null,
									backgroundImage: bgImg,
								}}
							>
								{/* bgImg.alignTo==='top' ? {bottom:0} : {top:0}} */}
								{/* {console.log(bgImg)} */}
								{bgImg ? (
									<GatsbyImage
										image={bgImg.datas}
										src={bgImg.datas.src}
										srcSet={bgImg.datas.srcSet}
										layout={'fullWidth'}
										formats={['auto']}
										alt="asd"
										// style={
										// 	!bgImg.alignTo
										// 		? { objectPosition: 'top' }
										// 		: { objectPosition: bgImg.alignTo }
										// }
										className="gatsbyImgHero"
										imgClassName="imgHero"
										objectPosition={!bgImg.alignTo ? 'top' : bgImg.alignTo}
									/>
								) : null}

								{heading}
								<SubRow
									children={children}
									element={params.element}
									numColumns={opt.numColumns}
									rowWidth={rowWidth}
								/>
							</div>
						)
					default:
						return (
							<div
								className={
									elementClass +
										' responsive-padding' +
										' ' +
										bgOpt.theme_color || bgOpt.value_bgColor
								}
								style={{
									backgroundColor: bgOpt.theme_color
										? null
										: bgOpt.value_bgColor,
								}}
							>
								{children}
							</div>
						)
				}
			} else {
				return null
			}
		case 'carousel':
			if (children && params.wrapperRef) {
				return (
					<div className={'grid-' + params.gridType + ' ' + elementClass}>
						<ul
							ref={params.wrapperRef}
							className={
								'grid-' +
								params.gridType +
								'-list ' +
								elementClass +
								'-list no-pdd-mrg-first-last-child'
							}
						>
							{children}
						</ul>
					</div>
				)
			} else {
				return null
			}
		case 'content-item':
			if (params.gridType && params.gridClass) {
				const basis = 100 / params.numColumns
				const elementTag =
					params.gridType === 'carousel' ? (
						<li className={params.gridClass}>{children}</li>
					) : (
						<div
							className={params.gridClass}
							style={{ flexBasis: basis + '%' }}
						>
							{children}
						</div>
					)
				return <>{elementTag}</>
			} else {
				return null
			}
		case 'columns':
			if (children) {
				return (
					<div
						className={'grid-' + params.gridType + '-list'}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: params.alignTo,
						}}
					>
						{children}
					</div>
				)
			} else {
				return null
			}
		case 'form':
			if (
				params.form &&
				params.formID &&
				params.textButton &&
				params.heading &&
				params.buttonColor &&
				params.textButtonColor &&
				params.tksMsg
			) {
				const formId = slugify(params.formID)
				const visibleClassState = params.refState ? 'visible' : 'not-visible'

				return (
					<>
						<div className="popup-button-wrapper">
							<button
								onClick={params.handleRefState}
								className="popup-button button-black-gray"
							>
								Need advice?
							</button>
						</div>
						<div
							id="ref-overlay"
							ref={params.wrapperRef}
							className={'popup-wrapper popup-state-' + visibleClassState}
						>
							<div
								id="ref-inner"
								className="popup-inner black-row"
								style={{
									backgroundColor: params.popupBackgroundColor,
								}}
							>
								<button
									className="close-button"
									onClick={params.handleRefState}
								>
									X
								</button>
								<div className="popup-content">
									<h2 className="popup-heading">{params.heading}</h2>
									<div
										className="popup-text"
										dangerouslySetInnerHTML={{ __html: params.popupText }}
									></div>
									<div id="popup-code">
										<form
											name={params.formID}
											method="POST"
											data-netlify="true"
											netlify-honeypot="bot-field"
											className="popup-form align-center"
											id={formId}
										>
											<p className="bot-field-hide">
												<label>
													Don’t fill this out if you're human:
													<input name="bot-field" />
												</label>
											</p>
											<div
												className="popup-code-div"
												dangerouslySetInnerHTML={{ __html: params.form }}
											></div>
											<button
												type="submit"
												className="popup-submit button-black-gray"
												style={{
													backgroundColor: params.buttonColor,
													color: params.textButtonColor,
													borderColor: params.textButtonColor,
												}}
											>
												{params.textButton}
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</>
				)
			} else {
				return null
			}
		default:
			return null
	}
}

export default InsertHTML
