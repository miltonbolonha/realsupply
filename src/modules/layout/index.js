import { React } from './dependencies'
import LayoutResolver from './containers/'

const Layout = ({ 
    
  children, 
  opt, 
  type, 
  querySelector,
  sectionTitle,
  setLocation,

}) => {

  return(
    <LayoutResolver 
      children={ children } 
      opt={ opt } 
      type={ type }
      querySelector={ querySelector }
      sectionTitle={ sectionTitle }
      setLocation={ setLocation }
    />
)}

export default Layout