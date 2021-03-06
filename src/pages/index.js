// import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
// import fetch from 'node-fetch'
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
					Suprimentos <span className="cta-heading__italic">em geral</span>
				</h2>
				{/* <a href="http://google.com" className="cta-link">
					Produtos
				</a> */}
				<a
					href="https://api.whatsapp.com/send?phone=5513997733547&text=Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es."
					className="cta-link dark"
					target="_blank"
					nofollow
					rel="noreferrer"
				>
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
				</div>
			</Layout>
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
