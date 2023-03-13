import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import About from "./component/About.jsx";
import AboutChild from "./component/AboutChild.jsx";

import CreateMode from "./component/create_mode/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="about" element={<About></About>}>
            <Route path=":id" element={<AboutChild></AboutChild>}></Route>
          </Route>

          <Route path="create" element={<CreateMode></CreateMode>}>
            {/* <Route path=":id" element={<AboutChild></AboutChild>}></Route> */}
          </Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
