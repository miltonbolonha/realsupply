async function SgmModule(params) {
	return (
		console.log('... VAAAIIIII ... SendGrid Masterfullish'),
		fetch(`/.netlify/functions/sgm?action=${params}`)
			.then((res) => res.text())
			.then((text) => console.log(text))
	)
}

module.exports = { SgmModule }
