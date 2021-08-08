const sgMail = require('@sendgrid/mail')

exports.handler = async function (event, context) {
	// your server-side functionality
	let responseis = null
	console.log('event:::')
	console.log(event.queryStringParameters.action)
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const msg = {
		to: 'vendas@realsupply.com.br', // Change to your recipient
		from: 'vendas@realsupply.com.br', // Change to your verified sender
		subject: 'SITE: Nova Mensagem',
		// text: 'Será que tá indo?',
		html: '<strong>Zumba master test.</strong>',
	}
	switch (event.queryStringParameters.action) {
		case 'SEND':
			sgMail
				.send(msg)
				.then(() => {
					responseis = 'Email sent'
					// alert('SG submitted')
				})
				.catch((error) => {
					responseis = error
					// alert('SG error')
				})
			break

		default:
			break
	}

	console.log('responseis:: ' + responseis)
	console.log('fim')
	return {
		statusCode: 200,
		body: JSON.stringify({ message: responseis + ' ssHello World' }),
	}
}
