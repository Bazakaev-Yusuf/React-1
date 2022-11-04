import Header from "./header"
import Menu from "./menu"
import Main from "./main"
import Buttons from "./buttons"
import { useState } from "react"
import FooterLogo from "./footer-logo"
import FooterList from "./footer-list"
import Rooles from "./footer-rooles"


function App(){
   const [num, setNum] = useState(0);  
   
  return(
   <div className="container">
      <div className="header">
         <Header/>
         <Menu/>
      </div>
      <div className="main">
         <Main num = {num}/>
         <Buttons num = {num} setNum = {setNum}/>         
      </div>
      <footer>
         <div className="nav">
            <FooterLogo/>
            <FooterList/>
         </div>
         <Rooles/>
      </footer>
   </div>
  )
}
export default App