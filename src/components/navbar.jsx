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
                    <img src="https://logosmarcas.net/wp-content/uploads/2022/01/Umbrella-Academy-Logo.png" alt="" />
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="" />
                </button>

                <button className="closeMenu"
                onClick={closeMenu}>
                    <img src="https://icons-for-free.com/download-icon-x-1321215629555778185_512.png" alt="" />
                </button>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav