import { useLocation, useNavigate } from 'react-router-dom';
import './footer.css'


const Footer = () => {

  const location = useLocation();
  const navigate = useNavigate();
  return (
   
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="footer-container text-center">
        
     
          <button
            className="btn btn-dark mb-5"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
          
        
        <br></br>
        <h4>jess move © 2024</h4>
      </div>
    </footer>
  
)};

export default Footer;