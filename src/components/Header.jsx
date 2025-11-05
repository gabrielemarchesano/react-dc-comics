import Navbar from "./Navbar";
import dcLogo from "../assets/img/dc-logo.png"

export default function Header(){
  return(
    <header className="d-flex justify-content-between align-items-center py-3 container">
      <div className="logo">
        <img src={dcLogo} alt="" />
      </div>
      <Navbar/>
    </header>
  )
}