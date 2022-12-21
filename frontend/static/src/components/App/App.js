import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./../Courses/Courses";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="courses" element={<Courses />} />

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
