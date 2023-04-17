import { Link } from 'react-router-dom';
import './style.css';

const PagesLinks = () => {
  return (
    <nav className="pages-links">
      <Link to="/">Home</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/about-us">About us</Link>
    </nav>
  );
};

export default PagesLinks;
