import { React } from '../dependencies'

const ABpop = ({
	wrapperRef,
	visibleClassState,
	popupBackgroundColor,
	handleRefState,
	heading,
	popupText,
	formID,
	formIdSlug,
	form,
	buttonColor,
	textButtonColor,
	textButton,
}) => {
	return (
		<>
			<div className="popup-button-wrapper">
				<button
					onClick={handleRefState}
					className="popup-button button-black-gray"
				>
					Need advice?
				</button>
			</div>
			<div
				id="ref-overlay"
				ref={wrapperRef}
				className={'popup-wrapper popup-state-' + visibleClassState}
			>
				<div
					id="ref-inner"
					className="popup-inner black-row"
					style={{
						backgroundColor: popupBackgroundColor,
					}}
				>
					<button className="close-button" onClick={handleRefState}>
						X
					</button>
					<div className="popup-content">
						<h2 className="popup-heading">{heading}</h2>
						<div
							className="popup-text"
							dangerouslySetInnerHTML={{ __html: popupText }}
						></div>
						<div id="popup-code">
							<form
								action="thank-you"
								name={formID}
								method="POST"
								data-netlify="true"
								netlify-honeypot="bot-field"
								className="popup-form align-center"
								id={formIdSlug}
								encType="application/x-www-form-urlencoded"
							>
								<p className="bot-field-hide">
									<label>
										Don’t fill this out if you're human:
										<input name="bot-field" />
										<input type="hidden" name="form-name" value={formID} />
									</label>
								</p>
								<div
									className="popup-code-div"
									dangerouslySetInnerHTML={{ __html: form }}
								></div>
								<button
									type="submit"
									className="popup-submit button-black-gray"
									style={{
										backgroundColor: buttonColor,
										color: textButtonColor,
										borderColor: textButtonColor,
									}}
								>
									{textButton}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ABpop
