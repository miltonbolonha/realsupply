import { React, useEffect, useRef, useState } from '../dependencies'
import LayoutContext from '@Layout/services/LayoutContext'

import grabHorizontalScroll from '../../../tools/grabHorizontalScroll'
import useListenOutsideEvents from '../../../tools/useListenOutsideEvents'

import ABcontainer from './ABcontainer'

import { Page__Settings } from '../config/'

export default ({ querySelector=String, blockOptions, type }) => {

  const { settings } = Page__Settings( { querySelector } )
  const { data } = Page__Settings( { querySelector } )

  const { sliderClass } = settings
  const { isCarousel } = settings
  const { isPopup } = settings

  const gridType = (isCarousel) ? 'carousel' : 'columns'
  const hasForm = (isPopup) ? 'form' : null

  const [refState, setRefState] = useState(false)
  const handleRefState = () =>{
    setRefState(!refState)
  }
 
  function GridContentSlider(ref,qSel) {
    useEffect(() => {
      grabHorizontalScroll(qSel)
    })
  }

  let wrapperRef = null  

  if(isCarousel) {
    
    wrapperRef = useRef(null)
    GridContentSlider(wrapperRef, querySelector)

  }else if(isPopup) {
    
    wrapperRef = useRef(null)
    
    const pageParams = {
      'querySelector': querySelector, 
      'wrapperRef': wrapperRef,
      'handleRefState': handleRefState,
      'refState': refState
    }

    const popUpSettings = Page__Settings( pageParams ).settings
    
    useListenOutsideEvents( popUpSettings )
    
  }
  const numColumns = (blockOptions) ? blockOptions.numColumns : 1
  const alignTo = (blockOptions) ? blockOptions.alignTo : 'left'



  const itemParams = {
    'gridType'  : gridType,
    'hasFrom'  : hasForm,
    'numColumns': numColumns,
    'alignTo'   : alignTo,
    'elementClass': sliderClass,
    'mouseDown': settings.mouseDown,
    'outsideClick': settings.outsideClick,
    'hasOverlay': settings.hasOverlay,
    'scroll': settings.scroll,
    'resize': settings.resize,
    'handleRefState': handleRefState,
    'refState': refState,
    'wrapperRef': wrapperRef
  }

  return(
    <LayoutContext.Consumer>
      {contextData=>{
        return(
            <ABcontainer 
              data={data} 
              type={ type } 
              itemParams={ itemParams } />
        )
      }}
         
    </LayoutContext.Consumer>   

)}