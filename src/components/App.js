import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./home/Home";
import Login from "./auth/Login";
import PollDetails from "./polls/PollDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/questions/:id" element={<PrivateRoute />}>
        <Route path="/questions/:id" element={<PollDetails />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
