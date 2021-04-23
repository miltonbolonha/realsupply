// eslint-disable-next-line
import { React } from "../dependencies.js"

import GlobalContext from "../../layout/services/context"
import Card from "../components/Card"

export default ({ children }) => {
  return (
    <GlobalContext.Consumer>
      {value => <Card>{children}</Card>}
    </GlobalContext.Consumer>
  )
}
