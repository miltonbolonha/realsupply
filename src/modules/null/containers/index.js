import { React } from "../dependencies"
import CardContainer from "../containers/CardContainer"

export default ({ children, type }) => {
  function renderComponent(renderThis) {
    switch (renderThis) {
      case "Card":
        return <CardContainer children={children} />
      default:
        return console.log(renderThis)
    }
  }
  return <>{renderComponent(type)}</>
}
