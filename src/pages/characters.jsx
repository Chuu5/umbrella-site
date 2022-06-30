import Card from "../components/cards"
import "./characters.css"
import { Link } from "react-router-dom";


function characters() {


    return (
        <div className="container">
            <div className="cards">
                <Link to="/characters/1">
                    <Card
                    image={"https://i.pinimg.com/originals/92/aa/f7/92aaf78faa859108baf28c5dc02198b5.jpg"}
                    name={"Luther Hargreeves"}
                     />
                </Link>

                <Link to="/characters/2">
                    <Card image={"https://static.wikia.nocookie.net/deadliestfiction/images/5/57/DiegoProfile.jpg"}
                    name="Diego Hargreeves"
                    />
                    
                </Link>

                <Link to="/characters/3">
                    <Card image={"https://preview.redd.it/7j1xcggjjlu61.jpg?width=1414&format=pjpg&auto=webp&s=e0e4ead162327b9e4934fad999cbdf34f005c14c"}
                    name="Allison Hargreeves"
                    />
                </Link>

                <Link to="/characters/4">
                    <Card image={"https://pbs.twimg.com/media/ESRcIbKXcAAlJxn?format=jpg&name=small"}
                    name="Klaus Hargreeves"
                    />
                </Link>

                <Link to="/characters/5">
                    <Card image={"https://pbs.twimg.com/media/D0w3cRWWkAESYVi.jpg"}
                    name="Five"
                    />
                </Link>

                <Link to="/characters/6">
                    <Card image={"https://i.pinimg.com/564x/e5/49/6b/e5496b04b5d2d10cd2a3c00da04f1489.jpg"}
                    name="Ben Hargreeves"
                    />
                </Link>

                <Link to="/characters/7">
                    <Card image={"https://soundvenue.com/wp-content/uploads/2020/12/TUA_205_Unit_03479RC2-920x920.jpg"}
                    name="Vanya Hargreeves"
                    />
                </Link>

                <Link to="/characters/8">
                    <Card image={"https://static1.purebreak.com.br/articles/1/10/74/21/@/474153--the-umbrella-academy-reginald-hargree-700x700-1.jpg"}
                    name="Reginald Hargreeves"
                    />
                </Link>
            </div>


        </div>
    )
}

export default characters