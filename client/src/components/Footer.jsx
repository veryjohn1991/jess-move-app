import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Footer.css'


const Footer = () => {

  const location = useLocation();
  const navigate = useNavigate();
  return (
  
    <footer>
      <div className="footer-container">
        
          <br></br>
          <button
            className="btn"
            onClick={() => navigate(-1)}
          >Go Back</button>
        <h3>jess move © 2024</h3>
      </div>
    </footer>
  
)};

export default Footer;