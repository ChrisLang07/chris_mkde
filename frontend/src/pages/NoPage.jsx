import { useNavigate } from 'react-router-dom';
import '../assets/scss/components/NoPage.scss';

export default function NoPage() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className='no-page'>
            <h1 className='no-page--title'>404</h1>
            <span className='oups'>Oups! Nothing here ...</span>
            <button onClick={handleBackToHome} className='back-to-home'>
                Back to home
            </button>
        </div>
    );
}
