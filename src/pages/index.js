// import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { graphql } from 'gatsby'
import {
	FaWhatsapp,
	// FaShip,
	// FaShippingFast,
	// FaHospitalSymbol,
	// FaTools,
} from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '@Layout'

const IndexPage = ({ data }) => {
	// console.log(data.staticMap)
	// function changeBackground(e) {
	// 	e.target.style.background = 'red'
	// }

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

	return (
		<Layout type="BODY" opt={{ titleSeo: 'Inicial' }}>
			<Layout type="HEADER" logo={data.realLogo} />
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: false,
					classes: 'wrapper-overflow hero-cta',
					alignTo: 'center',
					bgImg: {
						datas: data.heroImg,
						alignTo: 'center',
					},
				}}
			>
				<h2 className="cta-heading">
					Lorem ipsum sapi entei "
					<span className="cta-heading__italic">apsuum</span>" sa piente
				</h2>
				<a href="http://google.com" className="cta-link">
					Produtos
				</a>
				<a href="http://google.com" className="cta-link dark">
					Ligar Aqui
					<FaWhatsapp className="FaWhatsapp" />
				</a>
			</Layout>

			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: 'wrapper-overflow',
					alignTo: 'center',
				}}
			>
				<div className="first-row">
					<h3 className="first-title desktop-only">Conheça</h3>
					<div className="box-content">
						<h3 className="main-title">Suprimento Sustentável</h3>
						<p className="commom-paragraph">
							A Real Supply é especialista em serviços de alojamento físico e
							virtual. Bem como as administração e métricas dos preços e das
							disponibilidades de mercado dos mesmos.
						</p>
						<p className="commom-paragraph">
							Nossos colaboradores são treinados em administração de preços e
							logística de suprimentos em dezenas de segmentos, tais como:
							serviços diversos, suprimentos de laboratório, suprimentos para
							indústria, suprimentos para navios e materiais diversos.
						</p>
						<p className="commom-paragraph">
							Somos voltados para o atendimento eficiente das necessidades de
							requisições de suprimentos em alta demanda, segurança em compras e
							entregas.
						</p>
					</div>
				</div>
			</Layout>
			<Layout
				type="ROW"
				opt={{
					bgColor: '#01071d',
					isBoxed: false,
					classes: 'wrapper-overflow',
					alignTo: 'center',
				}}
			>
				<div className="second-row">
					<div className="scene-main">
						<div className="scene-title">
							<StaticImage
								src="../../static/assets/images/real-supply-crown.png"
								alt="Real Supply"
								width={150}
								// height={60}
								className="scene-logo"
								style={{ objectFit: 'cover' }}
							/>
							<h2 className="scene-heading">Parceiros e compliance</h2>
							<p className="commom-paragraph scene-paragraph">
								Mantemos um histórico rigoroso e ético dos nossos procedimentos
								internos desde o dia um de todos os contratos da Real Supply.
								Promovendo assim um mercado mais transparente.
							</p>
						</div>
						<div className="circle-path desktop-only">
							<StaticImage
								src="../../static/assets/images/porto.jpg"
								alt="Real Supply"
								width={800}
								height={320}
								className="circle-me"
								style={{ objectFit: 'cover', zIndex: 1 }}
							/>
							{/* <StaticImage
								src="../../static/assets/images/porto.jpg"
								alt="Real Supply"
								width={1200}
								height={500}
								className="circle-me blur"
								style={{
									objectFit: 'cover',
									position: 'absolute',
									zIndex: 0,
									right: 0,
								}}
							/> */}
						</div>

						<div
							className="clearFix"
							style={{
								content: '',
								display: 'block',
								clear: 'both',
							}}
						></div>
					</div>
					<div className="zerb">
						<StaticImage
							src="../../static/assets/images/real-supply-crown.png"
							alt="Real Supply"
							width={150}
							// height={60}
							className="scene-logo"
							style={{ objectFit: 'cover' }}
						/>

						<StaticImage
							src="../../static/assets/images/real-supply-crown.png"
							alt="Real Supply"
							width={150}
							// height={60}
							className="scene-logo"
							style={{ objectFit: 'cover' }}
						/>

						<StaticImage
							src="../../static/assets/images/real-supply-crown.png"
							alt="Real Supply"
							width={150}
							// height={60}
							className="scene-logo"
							style={{ objectFit: 'cover' }}
						/>

						<StaticImage
							src="../../static/assets/images/real-supply-crown.png"
							alt="Real Supply"
							width={150}
							className="scene-logo"
							style={{ objectFit: 'cover' }}
						/>

						<StaticImage
							src="../../static/assets/images/real-supply-crown.png"
							alt="Real Supply"
							width={150}
							className="scene-logo"
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</div>
			</Layout>

			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: true,
					classes: 'wrapper-overflow',
					alignTo: 'center',
				}}
			>
				<div className="first-row">
					<h3 className="first-title desktop-only">Contato</h3>
					<div className="box-content">
						<h3 className="main-title">Fale Conosco</h3>
						{/* <p className="commom-paragraph">Aqui. </p> */}
						<form
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							target="_blank"
							onSubmit={(e) => handleSubmit(e, email, honey)}
							noValidate
							className="contact-us validate"
						>
							<label htmlFor="name" className="contact-label">
								Nome:
							</label>
							<br />
							<input
								type="text"
								name="name"
								id="name"
								className="contact-us-name"
								placeholder="Nome Sobrenome"
							/>
							<br />
							<label htmlFor="email" className="contact-label">
								E-mail:
							</label>
							<br />
							<input
								type="email"
								name="email"
								id="email"
								className="contact-us-email"
								placeholder="email@empresarial.com"
							/>
							<br />
							<label htmlFor="msg" className="contact-label">
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
							></textarea>
							<br />
							<input
								type="button"
								value="Enviar"
								className="contact-us-button"
							/>
						</form>
					</div>
				</div>
			</Layout>
			<Layout type="FOOTER" />
		</Layout>
	)
}

export const queryBg = graphql`
	query heroBg {
		heroImg: file(name: { eq: "hero-img" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
		porto: file(name: { eq: "porto.jpg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
		realLogo: file(name: { eq: "real-supply-svg" }) {
			childImageSharp {
				gatsbyImageData
			}
			extension
			publicURL
		}
		# staticMap {
		# 	childFile {
		# 		childImageSharp {
		# 			gatsbyImageData(layout: FIXED)
		# 		}
		# 	}
		# }
	}
`

export default IndexPage
