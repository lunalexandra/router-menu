import { useNavigate, Link } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>
      <Link className="notFound__link" to="/">
        Home
      </Link>
      </p>
      <button className="notFound__btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};
