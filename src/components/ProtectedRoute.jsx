// import React, { useEffect, useState } from "react";

// const ProtectedRoute = ({ children }) => {
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     const jwt = localStorage.getItem("token");
//     setToken(jwt);
//   }, []);

//   if (!token) {
//     return <
//   }
//   return children;
// };

// export default ProtectedRoute;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("token");
    if (!login) {
      navigate("/");
    }
    if (login && (window.location.path === "/" || "signin")) {
      navigate("/blogs");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
