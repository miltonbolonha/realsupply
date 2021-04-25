import { React } from '../dependencies'

import { Page__Settings } from '../config/'
import ABpopupcontainer from './ABpopupcontainer'
import ABblockcontainer from './ABblockcontainer'


const ABcontainer = ({ type, querySelector, blockOptions }) => {

  const { settings } = Page__Settings( { querySelector } )
  const { data } = Page__Settings( { querySelector } )

  const newParams = {
    'numColumns': (blockOptions) ? blockOptions.numColumns : 1,
    'alignTo': (blockOptions) ? blockOptions.alignTo : 'left',
    'type': type
  }

  const params = Object.assign( newParams, settings )
 
  switch (type) {
    case 'POPUP':
      return <ABpopupcontainer 
        querySelector={ querySelector } 
        data={ data }
      />
    case 'BLOCK':
      return  <ABblockcontainer
        data={ data }
        params={ params }
        querySelector={ querySelector }
      />
  default:
    return null
  }
}

export default ABcontainer