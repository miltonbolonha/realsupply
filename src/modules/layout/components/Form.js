import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
// import { React } from '../dependencies'

const Form = () => {
	const [email, setEmail] = useState('')
	const [honey, setHoney] = useState('')
	const [mcRes, setMcRes] = useState('')
	const [msg, setMsg] = useState('')
	const [success, setSuccess] = useState('')
	const handleMcRes = (msgReceived, resReceived) => {
		setMcRes(resReceived)
		handleMsg(msgReceived, resReceived)
		handleSuccess(resReceived)
	}
	const handleMsg = (msgNow, resReceived) => {
		let msgNull = null
		if (resReceived === 'error') {
			msgNull = 'E-mail inválido ou já cadastrado.'
		}
		if (resReceived === 'success') {
			msgNull = 'Lembrete definido. Até logo!'
		}
		setMsg(msgNull)
	}
	const handleSuccess = (successNow) => {
		setSuccess(successNow)
	}

	const handleEmailChange = (emailTyping) => {
		console.log('emailTyping is: ')
		console.log(emailTyping)
		setEmail(emailTyping)
	}
	const handleHoneypotChange = (honeyTyping) => {
		setHoney(honeyTyping)
	}
	const handleSubmit = async (e, email, honey) => {
		e.preventDefault()
		honey ||
			(await addToMailchimp(email).then(({ msg, result }) => {
				handleMcRes(msg, result)
			}))
	}
	const successHTMLstyle = {
		color: 'green',
		fontWeight: 900,
		marginBottom: 0,
	}
	const errorHTMLstyle = {
		color: 'red',
		marginBottom: 0,
		fontWeight: 900,
	}

	return (
		<>
			{msg ? (
				<p style={success === 'success' ? successHTMLstyle : errorHTMLstyle}>
					{msg}
				</p>
			) : null}
			{success !== 'success' ? (
				<form
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					target="_blank"
					onSubmit={(e) => handleSubmit(e, email, honey)}
					noValidate
					className="contact-us validate"
				>
					<p className="hidden">
						<label>
							Don’t fill this out if you’re human:{' '}
							<input
								name="bot-field"
								onChange={(e) => handleHoneypotChange(e.target.value)}
								value={honey}
							/>
						</label>
					</p>
					<br />
					{/* <label htmlFor="name" className="contact-label">
									Nome:
								</label>
								<br />
								<input
									type="text"
									name="name"
									id="name"
									className="contact-us-name"
									placeholder="Nome Sobrenome"
								/> */}
					<br />
					<label htmlFor="mce-EMAIL" className="contact-label">
						E-mail:
					</label>
					<br />
					<input
						type="email"
						name="EMAIL"
						id="mce-EMAIL"
						className="contact-us-email"
						placeholder="email@empresarial.com"
						required
						onChange={(e) => handleEmailChange(e.target.value)}
						value={email}
					/>
					<br />
					{/* <label htmlFor="msg" className="contact-label">
									Mensagem:
								</label>
								<br />

								<textarea
									name="msg"
									id="msg"
									className="contact-us-msg"
									cols="30"
									rows="10"
									placeholder="Mensagem"
								></textarea> */}
					<br />
					{honey || email === '' ? null : (
						<>
							<input
								type="button"
								value="Enviar"
								className="contact-us-button"
								name="subscribe"
								id="mc-embedded-subscribe"
								disabled={email ? false : true}
							/>
						</>
					)}
				</form>
			) : (
				<>
					<br />
				</>
			)}
		</>
	)
}

export default Form
