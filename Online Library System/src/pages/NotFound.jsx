import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404</h1>

      <h3>Page Not Found</h3>

      <p className="text-danger">
        Invalid Route:
        <br />
        <strong>{location.pathname}</strong>
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
