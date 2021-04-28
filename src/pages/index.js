// import { graphql, useStaticQuery } from "gatsby"
import React from 'react'
import { graphql } from 'gatsby'
import { FaWhatsapp } from 'react-icons/fa'

import Layout from '@Layout'
// import AtomicBlock from '@AtomicBlock'

const IndexPage = ({ data }) => {
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
				{/* <AtomicBlock type="POPUP" querySelector="New Popup" /> */}

				{/* <div
          className="index-main-container"
          dangerouslySetInnerHTML={{
            __html: queryManifesto.markdownRemark.html,
          }}
        ></div> */}
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
				<div className="left-highlight">
					<h2 className="lef-title desktop-only">Conheça</h2>
					<div className="box-content">
						<h3 className="main-title">Titulo dois</h3>
						<p className="commom-paragraph">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
							nihil provident sapiente ex, iusto, laborum sint hic voluptatem
							magni debitis doloribus, consequuntur reiciendis veritatis ipsum!
							Id pariatur voluptates voluptatum cumque.{' '}
						</p>
					</div>
				</div>
			</Layout>
			<Layout
				type="ROW"
				opt={{
					bgColor: '#01071d',
					isBoxed: true,
					classes: 'wrapper-overflow',
					alignTo: 'center',
				}}
			>
				<div className="second-row">
					<h2 className="">SS</h2>
					<p>loremmm</p>
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
		realLogo: file(name: { eq: "real-supply-svg" }) {
			childImageSharp {
				gatsbyImageData
			}
		}
	}
`

export default IndexPage
