import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import VideoRecorder from "./pages/VideoRecorder";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/videoRecorder" element={<VideoRecorder/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/report" element={<Report />} />
        <Route path="/movie/:id" element={<VideoRecorder />} />
        <Route path="*" element={<NoPage />} />
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;


