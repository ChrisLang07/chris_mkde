import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import PolicyContent from './pages/PolicyContent';
import CookieConsent from './components/CookieConsent'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/politique-de-confidentialite" element={<PolicyContent />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <CookieConsent /> 
    </BrowserRouter>
  );
}

export default App;
