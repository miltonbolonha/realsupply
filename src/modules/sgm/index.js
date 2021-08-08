// const React = require('react')
const SgmResolver = require('./containers/')

// import React from 'react'
// import SgmResolver from './containers/SgmResolver'
// const sgm = async function (type) {
// 	SgmResolver(type)
// }
const sgm = function (type) {
	return type
}
module.exports = { sgm }
