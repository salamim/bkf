import React, { useState } from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <div {...props}>{props.children}</div>;

const LoginAttemptList = (props) => {
  const [loginFilter, setLoginFilter] = useState("");
  const loginAttempts = props.attempts;

  return (
    <div className="Attempt-List-Main">
      <p>Recent activity</p>
      <input
        type="input"
        placeholder="Filter..."
        onChange={(e) => setLoginFilter(e.target.value)}
      />
      {loginAttempts.length > 0 ? (
        <ul className="Attempt-List">
          <LoginAttempt>
            {loginAttempts
              .filter((f) => f.includes(loginFilter) || "")
              .map((loginAttempt, index) => (
                <li key={index}>{loginAttempt}</li>
              ))}
          </LoginAttempt>
        </ul>
      ) : null}
    </div>
  );
};

export default LoginAttemptList;
