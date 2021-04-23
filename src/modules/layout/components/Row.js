import { React } from "../dependencies"
import InsertHTML from "../../../tools/InsertHTML"

export default ({ children, params, opt, bgOpt }) => (
  <>
    <InsertHTML
      type="row"
      params={params}
      opt={opt}
      children={children}
      bgOpt={bgOpt}
    />
  </>
)
