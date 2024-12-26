import { NavLink } from 'react-router-dom';
import '../assets/scss/Main.scss';

export default function Header () {
    return (
        <header className='container'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/office'>Office</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </header>
    )
}