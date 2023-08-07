import React, { useState, useEffect } from "react";
import Mainpage from "./Mainpage";
import TestPage1 from "./TestPage1";

function Main() {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.accessToken);
    }

    getToken();
  }, []);

  return <>{token === "" ? <TestPage1 /> : <Mainpage />}</>;
}

export default Main;
