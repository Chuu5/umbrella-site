import Card from "../components/cards"
import "./characters.css"
import { Link } from "react-router-dom";


function characters() {


    return (
        <div className="container">
            <div className="cards">
                <Link to="/characters/1">
                    <Card
                    image={"../assets/images/Luther.jpg"}
                    name={"Luther Hargreeves"}
                     />
                </Link>

                <Link to="/characters/2">
                    <Card image={"../assets/images/Diego.webp"}
                    name="Diego Hargreeves"
                    />
                    
                </Link>

                <Link to="/characters/3">
                    <Card image={"../assets/images/Allison.webp"}
                    name="Allison Hargreeves"
                    />
                </Link>

                <Link to="/characters/4">
                    <Card image={"../assets/images/Klaus.jpg"}
                    name="Klaus Hargreeves"
                    />
                </Link>

                <Link to="/characters/5">
                    <Card image={"../assets/images/Five.jpg"}
                    name="Five"
                    />
                </Link>

                <Link to="/characters/6">
                    <Card image={"../assets/images/Ben.jpg"}
                    name="Ben Hargreeves"
                    />
                </Link>

                <Link to="/characters/7">
                    <Card image={"../assets/images/Vanya.jpg"}
                    name="Vanya Hargreeves"
                    />
                </Link>

                <Link to="/characters/8">
                    <Card image={"../assets/images/Reginald.jpg"}
                    name="Reginald Hargreeves"
                    />
                </Link>
            </div>


        </div>
    )
}

export default characters