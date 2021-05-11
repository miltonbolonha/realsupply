// import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { graphql } from 'gatsby'
import {
	FaWhatsapp,
	FaShip,
	FaShippingFast,
	FaHospitalSymbol,
	FaTools,
} from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '@Layout'

const IndexPage = ({ data }) => {
	function changeBackground(e) {
		e.target.style.background = 'red'
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
						<h3 className="main-title">Titulo dois</h3>
						<p className="commom-paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							nihil provident sapiente ex, iusto, laborum sint hic voluptatem
							magni debitis doloribus, consequuntur reiciendis veritatis ipsum!
							Id pariatur voluptates voluptatum cumque.{' '}
						</p>
						<div className="first-row-highlight">
							<div className="inside-highlights">
								<FaShip className="FaHighlighIcon zena" />
								{/* <h2 className="inside-title">Aqui título</h2> */}
								{/* <div className="bg-inside-highlight">
									<StaticImage
										src="../../static/assets/images/hero-img.jpg"
										alt="Real Supply"
										// width={284}
										// height={60}
										className="bg-inside-img"
										style={{ objectFit: 'cover', width: '100%' }}
									/>
								</div> */}
								{/* <p className="highlights-paragraph">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus neque delectus commodi ab.
								</p> */}
								{/* <div className="marquee">
									<p className="marquee-p">
										Produto I Produto Outro Mais um Produto aqui Produto I
										Produto Outro Mais um Produto aqui
									</p>
								</div> */}
							</div>
							<div className="inside-highlights">
								{/* <h2 className="inside-title">Aqui título</h2> */}
								<FaShippingFast className="FaHighlighIcon zena" />
								{/* <div className="bg-inside-highlight">
									<StaticImage
										src="../../static/assets/images/hero-img.jpg"
										alt="Real Supply"
										// width={284}
										// height={60}
										className="bg-inside-img"
										style={{ objectFit: 'cover', width: '100%' }}
									/>
								</div> */}
								{/* <p className="highlights-paragraph">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus neque delectus commodi ab.
								</p> */}
								{/* <div className="marquee">
									<p className="marquee-p">
										Produto I Produto Outro Mais um Produto aqui Produto I
										Produto Outro Mais um Produto aqui
									</p>
								</div> */}
							</div>
							<div className="inside-highlights">
								<FaHospitalSymbol className="FaHighlighIcon zena" />
								{/* <h2 className="inside-title">Aqui título</h2> */}
								{/* <div className="bg-inside-highlight">
									<StaticImage
										src="../../static/assets/images/hero-img.jpg"
										alt="Real Supply"
										// width={284}
										// height={60}
										className="bg-inside-img"
										style={{ objectFit: 'cover', width: '100%' }}
									/>
								</div> */}
								{/* <p className="highlights-paragraph">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus neque delectus commodi ab.
								</p> */}
								{/* <div className="marquee">
									<p className="marquee-p">
										Produto I Produto Outro Mais um Produto aqui Produto I
										Produto Outro Mais um Produto aqui
									</p>
								</div> */}
							</div>
							<div className="inside-highlights">
								<FaTools className="FaHighlighIcon zena" />
								{/* <h2 className="inside-title">Aqui título</h2> */}
								{/* <div className="bg-inside-highlight">
									<StaticImage
										src="../../static/assets/images/hero-img.jpg"
										alt="Real Supply"
										className="bg-inside-img"
										style={{ objectFit: 'cover', width: '100%' }}
									/>
								</div> */}
								{/* <p className="highlights-paragraph">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Necessitatibus neque delectus commodi ab.
								</p> */}
								{/* <div className="marquee">
									<p className="marquee-p">
										Produto I Produto Outro Mais um Produto aqui Produto I
										Produto Outro Mais um Produto aqui
									</p>
								</div> */}
							</div>
						</div>
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
							<h2 className="scene-heading">Parceiros</h2>
							<p className="scene-paragraph">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
								qui, aliquam obcaecati.
							</p>
						</div>
						<div className="circle-path ">
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
						<p className="commom-paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							nihil provident sapiente ex, iusto, laborum sint hic voluptatem
							magni debitis doloribus, consequuntur reiciendis veritatis ipsum!
							Id pariatur voluptates voluptatum cumque.{' '}
						</p>
						<form action="#" className="contact-us">
							<input
								type="text"
								name="name"
								id="name"
								className="contact-us-name"
								placeholder="Nome"
							/>
							<br />
							<input
								type="email"
								name="email"
								id="email"
								className="contact-us-email"
								placeholder="E-mail"
							/>
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
		}
	}
`

export default IndexPage
