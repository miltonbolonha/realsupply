import { React } from "../dependencies"

// import ABpopupcontainer from './ABpopupcontainer'
import ABblockcontainer from "./ABblockcontainer"

const ABcontainer = ({ data, type }) => {
  const { settings } = Page__Settings({ querySelector })
  const { data } = Page__Settings({ querySelector })

  const newParams = {
    numColumns: blockOptions ? blockOptions.numColumns : 1,
    alignTo: blockOptions ? blockOptions.alignTo : "left",
  }

  const params = Object.assign(newParams, settings)

  switch (querySelector) {
    // case 'POPUP':
    //   <ABpopupcontainer />
    case "BLOCK":
      ;<ABblockcontainer data={data} params={params} />
    default:
      return null
  }
}

export default ABcontainer
