import {Link} from 'react-router-dom'
import '../assets/sass/Navber.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>타입프로젝트</div>
        <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar