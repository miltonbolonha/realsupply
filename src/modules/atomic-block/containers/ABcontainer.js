import { React } from '../dependencies'

import slugify from '@tools/slugify'

import ABpopupcontainer from './ABpopupcontainer'
import ABblockcontainer from './ABblockcontainer'


const ABcontainer = ({ 
  
  data,
  type
  
}) => {

  
  const { settings } = Page__Settings( { querySelector } )
  const { data } = Page__Settings( { querySelector } )

  // const { sliderClass } = settings
  // const { isCarousel } = settings
  // const { isPopup } = settings
  // const { sliderClass } = settings

  // const gridType = (isCarousel) ? 'carousel' : 'columns'

  const newParams = {

    // 'wrapperRef': wrapperRef,
    // 'handleRefState': handleRefState,
    // 'refState': refState,
    // 'GridContentSlider': GridContentSlider,

    // 'gridType': gridType,
    // 'gridClass': "grid-" + gridType + "-item",
    
    'numColumns': (blockOptions) ? blockOptions.numColumns : 1,
    'alignTo': (blockOptions) ? blockOptions.alignTo : 'left'
    // 'elementClass': sliderClass || type

  }

  const params = Object.assign( newParams, settings )
 
  switch (querySelector) {
    case 'POPUP':
      <ABpopupcontainer />
    case 'BLOCK':
      <ABblockcontainer
        data={ data }
        params={ params }
      />
  default:
    return null
  }
}

export default ABcontainer