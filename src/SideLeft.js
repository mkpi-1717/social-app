import React from "react";
import {
   Link
} from "react-router-dom";

export default function SideLeft() {

  let userIsLogded = false;
  return (

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {!userIsLogded && <Link to="/login">Login</Link>}
        </li>
        <li>
          {!userIsLogded && <Link to="/signup">SignUp</Link>}
        </li>
        <li>
          {userIsLogded && <Link to="/">Logout</Link>}
        </li>
      </ul>

    </nav>

  );
}

