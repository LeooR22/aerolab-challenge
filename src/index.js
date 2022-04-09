import React from "react";
import ReactDOM from "react-dom";
import { NextUIProvider } from "@nextui-org/react";
import { EcommerceApp } from "./EcommerceApp";

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider>
      <EcommerceApp />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
