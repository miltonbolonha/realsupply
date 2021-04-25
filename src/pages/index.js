// import { graphql, useStaticQuery } from "gatsby"
import React from 'react'

import Layout from '@Layout'
// import AtomicBlock from '@AtomicBlock'

const IndexPage = (data) => {
	return (
		<Layout type="BODY" opt={{ titleSeo: 'homerzim' }}>
			<Layout type="HEADER" />
			<Layout
				type="ROW"
				opt={{
					bgColor: '#d352cc',
					isBoxed: true,
					classes: 'light-content wrapper-overflow',
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
				<h1>Bem-vindos</h1>
				<div className="body">
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
								<h2>Titulo 1</h2>
								<h3>Titulo dois</h3>
								{/* <img src="" alt=""/> */}
								<h2>Titulo 1</h2>
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

export default IndexPage
