import logo from "../../assets/gorraLogo.png"
import "./NavBar.css"
import CardWidget from '../CardWidget/CardWidget'

function NavBar() {
  return (
    <nav className="navbar">
        <div>
            <img className="logo" src={logo} alt="Logo comercio" />
        </div>
        <ul className="navbarLinks">
            <li className="navbarItem"><a href="#">Home</a></li>
            <li className="navbarItem"><a href="#">Todas las gorras</a></li>
            <li className="navbarItem"><a href="#">Deportes</a></li>
        </ul>
        <CardWidget/>
    </nav>
)
}

export default NavBar