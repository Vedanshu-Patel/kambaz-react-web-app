import Signin from "./Signin"
import Signup from "./Signup"
import Profile from "./Profile"
import AccountNavigation from "./Navigation"
import { Routes, Route, Navigate } from "react-router-dom"
export default function Account(){
    return(
        <div id="wd-account-screen">
        {/* <table width="100%">
          <tr> */}
            {/* <td valign="top" > */}
            <div className="d-flex">
             <div className="d-none d-md-block">
              <AccountNavigation />
            {/* </td> */}
            </div>
            {/* <td valign="top"> */}
            <div className="flex">
              <Routes>
                <Route path="/"        element={<Navigate to="/Kambaz/Account/Signin" />} />
                <Route path="/Signin"  element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup"  element={<Signup />} />
              </Routes>
              </div>
              </div>
            {/* </td>
          </tr>
        </table> */}
      </div>
    );

    
}