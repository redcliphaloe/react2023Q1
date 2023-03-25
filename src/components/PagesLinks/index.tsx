import { Link } from 'react-router-dom';
import './style.css';

function PagesLinks() {
  return (
    <nav className="pages-links">
      <Link to="/">Home</Link>
      <Link to="/about-us">About us</Link>
    </nav>
  );
}

export default PagesLinks;
