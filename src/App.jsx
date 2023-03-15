import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import About from "./component/About.jsx";
import AboutChild from "./component/AboutChild.jsx";

import CreateMode from "./component/create_mode/index.jsx";

import DesignPrinciple from "./views/design_principle/index.jsx";
import DesignSingle from "./views/design_principle/single.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="about" element={<About></About>}>
            <Route path=":id" element={<AboutChild></AboutChild>}></Route>
          </Route>

          <Route path="principle" element={<DesignPrinciple></DesignPrinciple>}>
            <Route
              path="single"
              element={<DesignSingle></DesignSingle>}
            ></Route>
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
