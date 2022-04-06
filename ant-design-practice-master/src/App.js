import React from "react";
//import { Nav } from 'react-bootstrap';
import { useRoutes } from "react-router";
import "./assets/css/App.css";
import Main from "./components/Main";
import MyLayout from "./components/MyLayout";



//import './assets/css/styles.css';

export default function App() {
  return useRoutes([
    { path: "layout", element: <MyLayout /> },
    { path: "*", element: <Main /> },
   
  ]);   
}
