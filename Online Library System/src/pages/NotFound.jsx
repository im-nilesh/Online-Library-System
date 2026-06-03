import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold">404</h1>

      <h2 className="text-2xl mt-4">Page Not Found</h2>

      <p className="mt-3">Invalid URL:</p>

      <p className="font-bold">{location.pathname}</p>

      <Link to="/" className="bg-blue-500 text-white px-5 py-2 rounded mt-5">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
