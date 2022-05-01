
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import React from "react";
function App() {
  return (
    <>
    <Header />
    <div className="App">
      <Sidebar />
      <Data />
    </div>
    </>
  )
}
export default App;
