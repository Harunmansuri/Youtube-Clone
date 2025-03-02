import React, { useState } from "react";
import NavBar from "./Components/Navbar/NavBar.jsx";
import { Route, Routes, useActionData } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Video from "./Pages/Video/Video.jsx";
const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <NavBar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
};

export default App;
