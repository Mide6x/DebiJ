import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  // Function to determine nav background color based on current route
  const getNavStyle = () => {
    switch (location.pathname) {
      case "/":
        return { backgroundColor: "var(--pink-bg)" };
      case "/works":
        return { backgroundColor: "var(--blue-bg)" };
      case "/contact":
        return { backgroundColor: "var(--green-bg)" };
      default:
        return { backgroundColor: "var(--pink-bg)" };
    }
  };

  return (
    <nav
      style={{
        ...getNavStyle(),
        padding: "0.5rem 2rem", // Reduced padding
        marginTop: "20px", // Adjusted margin
      }}
    >
      <div className="logo">debixson</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          home
        </Link>
        <Link
          to="/works"
          className={location.pathname === "/works" ? "active" : ""}
        >
          works
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
