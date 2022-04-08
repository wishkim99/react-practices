import React from "react";
import { useRoutes } from "react-router";

import Main from "./components/Main";
import Login from "./components/Login";
import MyLayout from "./components/MyLayout";


export default function App() {
  return useRoutes([
    { path: "layout", element: <MyLayout /> },
    { path: "*", element: <Main /> },
   { path: "login", element: <Login /> }
  ]);

}
