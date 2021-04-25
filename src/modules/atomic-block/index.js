import { React } from './dependencies'
import ABcontainer from './containers/'

const atomicBlock = ({ type, blockOptions, querySelector }) => {
	return (
		<ABcontainer
			type={type}
			blockOptions={blockOptions} // Remover e colocar no context
			querySelector={querySelector}
		/>
	)
}

export default atomicBlock
