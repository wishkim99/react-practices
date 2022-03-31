import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/App.scss";
import About from "./component/about/About";
import Me from "./component/about/Me";
import Error404 from "./component/error/Error404";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Main from "./component/Main";
import Join from "./component/user/Join";
import Login from "./component/user/Login";
import Settings from "./component/user/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="guestbook" element={<Guestbook />} />
        <Route path="about" element={<About />}>
          <Route path="me" element={<Me />}></Route>
        </Route>
        <Route path="user/login" element={<Login />} />
        <Route path="user/settings" element={<Settings />} />
        <Route path="user/join" element={<Join />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}