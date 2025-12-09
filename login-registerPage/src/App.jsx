import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element= {<Auth/>}>

        </Route>
      </Routes>
    </div>
  )
}


export default App;