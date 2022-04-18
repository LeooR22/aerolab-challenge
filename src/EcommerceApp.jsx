import React, { useEffect, useState } from "react";
import { AppRouter } from "./router/AppRouter";
import "./styles.css";
import UserContext from "./context/UserContext";
import { fetchApi } from "./helpers/fetchApi";

export const EcommerceApp = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchApi("user/me").then((data) => {
      setUserData(data);
    });
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          userData,
          setUserData,
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    </>
  );
};
