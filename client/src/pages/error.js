import {Link} from 'react-router-dom';
import notFound from '../assets/images/not-found.svg';
import '../assets/styles/error.css';

const Error = () => {
    return (
        <div className='error-page'>
            <img src={notFound} alt="not-found"></img>
            <h3>Ohh! Page Not Found</h3>
            <p>We can't seem to find the page you're looking for</p>
            <Link to='/' className='error-link btn btn-primary'>Back Home</Link>
        </div>
    )
}

export default Error;