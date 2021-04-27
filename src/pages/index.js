// import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { graphql } from 'gatsby'
import { FaWhatsapp } from 'react-icons/fa'

import Layout from '@Layout'
// import AtomicBlock from '@AtomicBlock'

const IndexPage = ({ data }) => {
	return (
		<Layout type="BODY" opt={{ titleSeo: 'Título maneiro' }}>
			<Layout type="HEADER" />
			<Layout
				type="ROW"
				opt={{
					// bgColor: '#d352cc',
					isBoxed: false,
					classes: 'wrapper-overflow hero-cta',
					alignTo: 'center',
					bgImg: {
						datas: data.file,
						alignTo: 'center',
					},
				}}
			>
				{/* <AtomicBlock type="POPUP" querySelector="New Popup" /> */}

				{/* <div
          className="index-main-container"
          dangerouslySetInnerHTML={{
            __html: queryManifesto.markdownRemark.html,
          }}
        ></div> */}
				<h2 className="cta-heading">
					Lorem ipsum sapi entei "<span>apsuum</span>" sa piente
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
					isBoxed: false,
					classes: 'wrapper-overflow',
					alignTo: 'center',
				}}
			>
				<div className="left-highlight">
					<h2>Titulo 1</h2>
					<h3>Titulo dois</h3>
				</div>
				<div className="body">
					<div className="container">
						<div className="left-column"></div>
						<div className="right-column">
							<div className="row-wrapper">
								<div className="first-row">
									<div className="box-img-title-desc">
										{/* <img src="" alt="" className="box-img"/> */}
										<h2 className="box-title">Title here</h2>
										<p>loremmm</p>
									</div>
									<div className="box-img-title-desc">
										{/* <img src="" alt="" className="box-img"/> */}
										<h2 className="box-title">Title here</h2>
										<p>loremmm</p>
									</div>
									<div className="box-img-title-desc">
										{/* <img src="" alt="" className="box-img"/> */}
										<h2 className="box-title">Title here</h2>
										<p>loremmm</p>
									</div>
									<div className="box-img-title-desc">
										{/* <img src="" alt="" className="box-img"/> */}
										<h2 className="box-title">Title here</h2>
										<p>loremmms</p>
									</div>
									<div className="box-img-title-desc">
										{/* <img src="" alt="" className="box-img"/> */}
										<h2 className="box-title">Title here</h2>
										<p>loremmm</p>
									</div>
									<div className="box-img-title-desc">
										{/* <img src="" alt="" className="box-img"/> */}
										<h2 className="box-title">Title here</h2>
										<p>loremmm</p>
									</div>
								</div>
							</div>
							<div className="row-wrapper">
								<div className="second-row">
									<h2>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Cum beatae, nemo maxime nesciunt
									</h2>
									<h3>video here</h3>
									<div className="two-columns">
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Praesentium velit quod, quas voluptatem minima pariatur hic
										atque nobis illum magnam doloremque laboriosam ex, mollitia
										laborum itaque in. Laudantium, porro consequuntur!
									</div>
								</div>
							</div>
							<div className="row-wrapper">
								<div className="count-row"></div>
							</div>
							<div className="row-wrapper">
								<div className="count-row"></div>
							</div>
							<div className="row-wrapper">
								<div className="count-row">Fim aqui</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<Layout type="FOOTER" />
		</Layout>
	)
}

export const queryBg = graphql`
	query heroBg {
		file(name: { eq: "hero-img" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`

export default IndexPage
