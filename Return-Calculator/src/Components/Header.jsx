import "./Header.css"
import logo from "../assets/rupee.png"
export default function Header(){
  return(
    <header  id="header">
      <img src={logo}/>
      <h1>Return Calculator</h1>
    </header>
  )
}