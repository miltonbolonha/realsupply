import { React, useState, useRef } from '../dependencies'

import { Page__Settings } from '../config/'

import slugify from '@tools/slugify'
import ABpopup from '../components/ABpopup'
import useListenOutsideEvents from '@tools/useListenOutsideEvents'

const ABpopupcontainer = ({
  
  querySelector,
  data

}) => {

  const [refState, setRefState] = useState(false)
  const handleRefState = () =>{
    setRefState(!refState)
  }

  const wrapperRef = useRef(null)

  const pageParams = {
    'querySelector': querySelector, 
    'wrapperRef': wrapperRef,
    'handleRefState': handleRefState,
    'refState': refState
  }

  const popUpSettings = Page__Settings( pageParams ).settings

  useListenOutsideEvents( popUpSettings )

  return(
    <>
      {data.map((e,i)=>{

        console.log( 'formeeeeeeeeeeeeID>>>>' )
        console.log( e )

        const { form } = e
        const { formID } = e
        const { textButton } = e
        const { heading } = e
        const { buttonColor } = e
        const { popupText } = e
        const { textButtonColor } = e
        const { popupBackgroundColor } = e
        // const { tksMsg } = e 

        const formIdSlug = slugify( formID )
        const visibleClassState = ( refState) ? 'visible' : 'not-visible'

        return (
            <ABpopup 

              key={ i }

              handleRefState={ handleRefState }
              wrapperRef={ wrapperRef }
              visibleClassState={ visibleClassState }
              popupBackgroundColor={ popupBackgroundColor }
              heading={ heading }
              popupText={ popupText }
              formID={ formID }
              formIdSlug={ formIdSlug }
              form={ form }
              buttonColor={ buttonColor }
              textButtonColor={ textButtonColor }
              textButton={ textButton }
            />
          )
        }
      )}
    </>
  )
}

export default ABpopupcontainer