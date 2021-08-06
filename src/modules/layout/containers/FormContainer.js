import React, { useState, useRef } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Form from '../components/Form'
// import { React } from '../dependencies'

const FormContainer = () => {
	const [email, setEmail] = useState('')
	const [honey, setHoney] = useState('')
	const [mcRes, setMcRes] = useState('')
	const [msg, setMsg] = useState('')
	const [success, setSuccess] = useState('')
	const wrapperRefSecond = useRef(null)

	console.log(process.env.MAILCHIMP_ENDPOINT)
	const handleMcRes = (msgReceived, resReceived) => {
		console.log(resReceived)
		setMcRes(resReceived)
		handleMsg(msgReceived, resReceived)
		handleSuccess(resReceived)
	}
	const handleMsg = (msgNow, resReceived) => {
		console.log('msgNow: ')
		console.log(msgNow)
		console.log('resReceived: ')
		console.log(resReceived)
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
		setEmail(emailTyping)
	}
	const handleHoneypotChange = (honeyTyping) => {
		setHoney(honeyTyping)
	}
	const handleSubmit = async (e, email, honey) => {
		alert('submitted')

		e.preventDefault()
		console.log('e: ')
		console.log(e)
		honey ||
			(await addToMailchimp(email, {
				PATHNAME: '/fale-conosco',
				FNAME: 'Nome',
				LNAME: 'Sobrenome',
			}).then(({ msg, result }) => {
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
	console.log(wrapperRefSecond)

	return (
		<>
			{msg ? (
				<p style={success === 'success' ? successHTMLstyle : errorHTMLstyle}>
					{msg}
				</p>
			) : null}
			{success !== 'success' ? (
				<Form
					handleSubmit={handleSubmit}
					email={email}
					honey={honey}
					handleHoneypotChange={handleHoneypotChange}
					handleEmailChange={handleEmailChange}
					wrapperRefSecond={wrapperRefSecond}
				/>
			) : (
				<>
					<br />
				</>
			)}
		</>
	)
}
export default FormContainer
