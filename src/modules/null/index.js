import { React } from "./dependencies"
import NullResolver from "./containers/"

const Null = ({ children, type }) => {
  return <NullResolver children={children} type={type} />
}

export default Null
