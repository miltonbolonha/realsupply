import Home__Settings from "./home-settings"

export default (pageName, pageParams) => {
  switch (pageName) {
    case "Home":
      return Home__Settings(pageParams)
    default:
      return Home__Settings(pageParams)
  }
}
