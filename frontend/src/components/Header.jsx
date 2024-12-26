import { NavLink } from 'react-router-dom';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Header.scss';

export default function Header() {
    return (
        <header className='container'>
            <h1 className='header-title'>Christophe LANGLOIS | Masseur-kinésithérapeute</h1>
            <div className='header-menu'>
                <nav className='menu-hamburger'>
                    <div className='menu-hamburger--bar'></div>
                    <div className='menu-hamburger--bar'></div>
                    <div className='menu-hamburger--bar'></div>
                </nav>
                <nav className='menu'>
                    <NavLink className='menu-link' to='/'>Home</NavLink>
                    <NavLink className='menu-link' to='/office'>Office</NavLink>
                    <NavLink className='menu-link' to='/contact'>Contact</NavLink>
                </nav>
            </div>
        </header>
    )
} 