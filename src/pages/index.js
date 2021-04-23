// import { graphql, useStaticQuery } from "gatsby"
import React from 'react'

import Layout from '@Layout'
// import AtomicBlock from "@AtomicBlock"

const IndexPage = (data) => {
	// const queryManifesto = useStaticQuery(graphql`
	//   query ManifestoVersionado {
	//     markdownRemark(
	//       headings: {
	//         elemMatch: {
	//           value: { eq: "Primeiro Manifesto Político Versionado do Mundo" }
	//         }
	//       }
	//     ) {
	//       html
	//       headings {
	//         value
	//       }
	//       timeToRead
	//       wordCount {
	//         paragraphs
	//         words
	//         sentences
	//       }
	//       excerpt
	//     }
	//   }
	// `)

	return (
		<Layout type="BODY">
			<Layout type="HEADER" />
			<Layout
				type="ROW"
				opt={{
					// bgColor: "#0052cc",
					isBoxed: true,
					classes: 'light-content',
					alignTo: 'center',
				}}
			>
				{/* <AtomicBlock type="POPUP" querySelector="New Popup" /> */}

				{/* <div
          className="index-main-container"
          dangerouslySetInnerHTML={{
            __html: queryManifesto.markdownRemark.html,
          }}
        ></div> */}
				<h1>Bem-vindo</h1>
				<div className="body">
					<header className="menu-header">
						<div>img</div>
						<div>
							{' '}
							<ul>
								<li>Teste</li>
								<li>Teste</li>
								<li>Teste</li>
								<li>Teste</li>
								<li>Teste</li>
							</ul>{' '}
						</div>
					</header>
					<div className="container">
						<div className="left-column">
							<div>
								{/* <img src="" alt=""/> */}
								<h2>Titulo 1</h2>
								<h3>Titulo dois</h3>
								{/* <img src="" alt=""/> */}
								<h2>Titulo 1</h2>
								<h3>Titulo dois</h3>
								{/* <img src="" alt=""/> */}
								<h2>Titulo s1</h2>
								<h3>Titulo dois</h3>
								{/* <img src="" alt=""/> */}
								<h2>Titulo 12</h2>
								<h3>Titulo dois</h3>
								{/* <img src="" alt=""/> */}
								<h2>Titulo 1</h2>
								<h3>Titulo dois</h3>
							</div>
						</div>
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
								<div className="count-row"></div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
			<Layout type="FOOTER" />
		</Layout>
	)
}

export default IndexPage
