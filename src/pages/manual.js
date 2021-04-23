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
			</Layout>
			<Layout type="FOOTER" />
		</Layout>
	)
}

export default IndexPage
