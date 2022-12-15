import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "./index.css";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </ReduxProvider>
);
