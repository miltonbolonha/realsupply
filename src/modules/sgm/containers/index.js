// const React = require('react')
const SendContainer = require('./SendContainer')

function SgmResolver(opt, type) {
	function executeComponent(execThis) {
		switch (execThis) {
			case 'SEND':
				return SendContainer()

			default:
				return console.log(execThis)
		}
	}
	return executeComponent(type)
}
module.exports = { SgmResolver }
