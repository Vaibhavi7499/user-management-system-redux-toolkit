import {NavLink } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
               
            </ul>
        </nav>
    </div>
  )
}

export default Layout