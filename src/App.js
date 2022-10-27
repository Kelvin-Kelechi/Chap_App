import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chat from "./components/Chat";
import CreateUser from "./components/CreateUser";

function App() {
  const [user, setUser] = useState("");

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/chart" element={<Chat user={user} />} />
          <Route
            path="/"
            element={<CreateUser setUser={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
