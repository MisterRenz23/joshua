import React from "react";
import LoginPage from "./LoginPage/LoginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessPage from "./SuccessPage/SuccessPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<LoginPage />}></Route>
        <Route path="/success" exact element={<SuccessPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
