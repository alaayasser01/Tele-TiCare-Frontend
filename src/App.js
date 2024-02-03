import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import WebcamVideo from "./pages/WebcamVideo";
import TestFirst from "./pages/TestFirst";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/videoRecorder" element={<WebcamVideo/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/report" element={<Report />} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/testfirst/:id" element={<TestFirst />} />
        <Route path="*" element={<NoPage />} />
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;


