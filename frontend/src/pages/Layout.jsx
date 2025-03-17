import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

export default function Layout() {
    return (
        <>
            <Header />
            <CookieConsent />
            <Outlet />
            <Footer />
        </>
    )
}