import { Link } from "react-router-dom"

function Navigation() {
  return (
      <nav>
        <ul className='nav-ul'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navigation