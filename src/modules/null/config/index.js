import CQM__Config from "../../cqm/config/"

export const nullSettings = ({ author, version, id }) => {
  const configs = {
    // implementation configs
    author: "@BolonhaDev",
    version: "0.0.1",
    id: "001",
  }
  return configs
}

export const Page__Settings = pageParams => {
  return CQM__Config("Card", pageParams)
}
