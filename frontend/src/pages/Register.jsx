import Form from "../components/Form";
import "../styles/LoginRegister.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <Form route="/api/user/register/" method="register" />
      <div className="linkToDiv">
        <a className="linkTo" onClick={() => navigate("/login")}>
          Already have an account? Login
        </a>
      </div>
    </>
  );
}

export default Register;
