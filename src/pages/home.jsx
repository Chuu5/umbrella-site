import './home.css'
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="Home">
      <div className="container">
        <section>
          <div className="home-text">
            <p>So, you want to know more about</p>
            <h2>The Umbrella Academy</h2>
            <p>Let's see a little about the most important characters in the serie then</p>
          </div>
          <Link to="/characters">
            <div className='circle'>
              See Now
            </div>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Home
