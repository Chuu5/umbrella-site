import "./navbar.css"
import { Link, Outlet } from "react-router-dom";

function openMenu() {
    let body = document.querySelector("body")

    body.classList.add("extended")
}

function closeMenu() {
    let body = document.querySelector("body")

    body.classList.remove("extended")
}


function Nav() {


    return (
        
        <>
            <nav>
                <div className="logo">
                    <img src="../assets/images/Logo.png" alt="Logo" />
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/characters">Characters</Link>
                        </li>
                    </ul>
                </div>

                <button className="openMenu"
                onClick={openMenu}>
                    <img src="./assets/images/Hamburguer.png" alt="" />
                </button>

                <button className="closeMenu"
                onClick={closeMenu}>
                    <img src="./assets/images/download-icon-x-1321215629555778185_0.svg" alt="" />
                </button>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav