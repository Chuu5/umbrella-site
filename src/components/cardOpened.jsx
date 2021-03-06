import "./cardOpened.css"
import { Link } from "react-router-dom";

function openCard( {image, name, codeName, powers, description, played_by} ) {



    return (
        <div className="container">
            <div className="flex">
                <div className="left-side">
                    <div className="image-container">
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <p className="card-name">Name</p>
                        <p>{name}</p>
                    </div>     
                    <div>
                        <p className="card-name">CodeName</p>
                        <p>{codeName}</p>
                    </div>
                   
                </div>


                <div className="right-side">
                    <div>
                        <p className="card-name">POWERS</p>
                        <p>{powers}</p>
                    </div>
                    <div>
                        <p className="card-name">PLAYED BY</p>
                        <p>{played_by}</p>
                    </div>
                    <div>
                        <p className="card-name">Description</p>
                        <p>{description}</p>
                    </div>
                </div>
                <Link to="/characters">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>
                </Link>

            </div>
        </div>
    )
}

export default openCard