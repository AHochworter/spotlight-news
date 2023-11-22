import './Footer.css';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function Footer() {
  return (
    <div className="footer">
      <div className="title-block">
        <div className="title-logo">
          <h2 className="subtitle">Spotlight News</h2>
        </div>
        <p className="project-details">
          Spotlight News is a Turing School Module 4 project built with
          React.js. Designed and developed by Ann Hochworter.
        </p>
      </div>
      <div className="linkedin-block">
        <div className="title-icon">
          <img src={linkedin} className="footer-icon" alt="linkedin-icon" />
          <h2 className="subtitle">LinkedIn</h2>
        </div>
        <p>
          <a href="https://www.linkedin.com/in/annhochworter/">
            Ann Hochworter
          </a>
        </p>
      </div>
      <div className="github-block">
        <div className="title-icon">
          <img src={github} className="footer-icon gh" alt="github-icon" />
          <h2 className="subtitle">GitHub</h2>
        </div>
        <p>
          <a href="https://github.com/AHochworter">github.com/AHochworter</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
