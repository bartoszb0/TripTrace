import Form from "../components/Form";
import "../styles/LoginRegister.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Form route="/api/token/" method="login" />
      <div className="linkToDiv">
        <a className="linkTo" onClick={() => navigate("/register")}>
          Don't have an account? Register
        </a>
      </div>
    </>
  );
}

export default Login;
