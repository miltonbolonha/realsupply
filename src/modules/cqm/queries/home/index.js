import LayoutLocation from "../query-layout"
// import NewPopup from "../query-popup"

export default (querySelector, setLocation) => {
  let query = null

  switch (querySelector) {
    case "Layout Location":
      query = LayoutLocation(setLocation)
      break
    case "New Popup":
      // query = NewPopup()
      break
    default:
      break
  }
  return {
    query,
  }
}
