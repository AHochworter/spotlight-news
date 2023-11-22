import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <h1 className="heading-primary">
        <span className="heading-primary-main">SPOTLIGHT NEWS</span>
        <span className="heading-primary-sub">Today's Top Headlines</span>
      </h1>
      <div className="home">
        {location.pathname !== '/' && (
          <Link className="home-link" to="/">
            Home
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
