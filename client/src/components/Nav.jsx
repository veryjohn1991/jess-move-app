import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Signin"
          // Check to see if the currentPage is `Signin`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "/Signin" ? "nav-link active" : "nav-link"}
        >
          Signin
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Query"
          // Check to see if the currentPage is `Query`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/Query" ? "nav-link active" : "nav-link"
          }
        >
          State Data
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Signup"
          // Check to see if the currentPage is `Signin`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "/Signup" ? "nav-link active" : "nav-link"}
        >
          Signup
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
