import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
          <h1>Sign up</h1>
          <FormControl placeholder="username" className="mb-2" />
          <FormControl placeholder="password" type="password" className="mb-2" />
          <FormControl placeholder="verify password" type="password" className="mb-2" />
          <Link  to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link>
          <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
    );}
    