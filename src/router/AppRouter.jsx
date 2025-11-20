// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import LoginScreen from "../pages/auth/LoginScreen";
// Pastikan path import ini sesuai dengan lokasi file VerifyOtpScreen kamu
import VerifyOtpScreen from "../pages/auth/verify/VerifyOtpScreen"; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<App />} />

        {/* AUTH */}
        <Route path="/login" element={<LoginScreen />} />
        
        {/* VERIFY (Tambahkan ini) */}
        <Route path="/verify" element={<VerifyOtpScreen />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;