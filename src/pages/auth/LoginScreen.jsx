import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
// 1. Import useNavigate
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Check, Lock, Mail, ArrowRight } from "lucide-react";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  
  // 2. Inisialisasi navigate
  const navigate = useNavigate();

  // 3. Handler Login (Logic tambahan)
  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect ke halaman verify
    navigate("/verify");
  };

  // === MOTION SETUP ===
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };

  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const imageX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const imageY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], [-50, 50]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], [-50, 50]);

  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReducedMotion || window.innerWidth < 768) return;
      const xPct = e.clientX / window.innerWidth - 0.5;
      const yPct = e.clientY / window.innerHeight - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    },
    [mouseX, mouseY, prefersReducedMotion]
  );

  useEffect(() => {
    let last = 0;
    const throttled = (e) => {
      const now = performance.now();
      if (now - last < 50) return;
      last = now;
      handleMouseMove(e);
    };
    window.addEventListener("mousemove", throttled);
    return () => window.removeEventListener("mousemove", throttled);
  }, [handleMouseMove]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-0 lg:p-4 overflow-hidden relative font-sans text-slate-800">
      {/* === BACKGROUND BLOBS === */}
      {!prefersReducedMotion && (
        <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="blob bg-blue-400/20 top-[-10%] left-[-10%] w-[60vw] h-[60vw]" />
          <div className="blob bg-purple-400/20 top-[10%] right-[-20%] w-[50vw] h-[50vw]" />
          <div className="blob bg-pink-400/20 bottom-[-20%] left-[20%] w-[60vw] h-[60vw]" />
        </motion.div>
      )}

      {/* === MAIN CONTAINER === */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="
          w-full max-w-6xl z-10 relative
          flex flex-col lg:flex-row
          lg:bg-white/70 
          lg:backdrop-blur-xl 
          lg:rounded-[2rem] 
          lg:shadow-2xl 
          lg:border lg:border-white/50 
          lg:ring-1 lg:ring-white/60 
          lg:overflow-hidden
        "
      >
        {/* === LEFT SIDE: FORM === */}
        <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative z-20 order-2 lg:order-1">
          <div className="mb-8 lg:mb-10 mt-8 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100/50 rounded-full border border-blue-200/50"
            >
              Secure Access
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-extrabold mb-4 text-slate-900 tracking-tight leading-tight"
            >
              Welcome <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Back.
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-slate-500 text-lg max-w-md">
              Enter your credentials to access your personalized dashboard.
            </motion.p>
          </div>

          {/* 4. Tambahkan onSubmit di sini */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* EMAIL */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative group overflow-hidden rounded-xl">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors z-10" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="w-full bg-white border border-slate-200 px-12 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 font-medium relative z-0"
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              </div>
            </motion.div>

            {/* PASSWORD */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
              <div className="relative group overflow-hidden rounded-xl">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors z-10" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-white border border-slate-200 px-12 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 font-medium relative z-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg z-10"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              </div>
            </motion.div>

            {/* OPTIONS */}
            <motion.div variants={itemVariants} className="flex items-center justify-between text-sm pt-2">
              <label className="flex items-center gap-3 cursor-pointer group select-none">
                <div
                  onClick={() => setIsChecked(!isChecked)}
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                    isChecked
                      ? "bg-slate-900 border-slate-900"
                      : "border-slate-300 bg-white group-hover:border-blue-400"
                  }`}
                >
                  <Check
                    size={12}
                    className={`text-white transition-transform duration-300 ${
                      isChecked ? "scale-100" : "scale-0"
                    }`}
                    strokeWidth={4}
                  />
                </div>
                <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="font-bold text-blue-600 hover:text-blue-700 relative group">
                Forgot Password?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </motion.div>

            {/* BUTTONS */}
            <div className="space-y-4 pt-4">
              {/* 5. Pastikan button type="submit" */}
              <motion.button
                variants={itemVariants}
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
              </motion.button>

              <motion.button
                variants={itemVariants}
                type="button"
                whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 1.98 }}
                className="w-full bg-white border border-slate-200 text-slate-700 font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:border-slate-300 transition-colors"
              >
                <GoogleIcon />
                <span>Continue with Google</span>
              </motion.button>
            </div>
          </form>

          <motion.div variants={itemVariants} className="mt-auto pt-8 pb-8 lg:pb-0 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{" "}
              <a href="#" className="font-bold text-slate-900 hover:underline">
                Create Account
              </a>
            </p>
          </motion.div>
        </div>

        {/* === RIGHT SIDE (IMAGE SECTION) === */}
        <div className="hidden lg:block w-full lg:w-1/2 relative h-64 lg:h-auto overflow-hidden bg-slate-100 order-1 lg:order-2">
          <div className="w-full h-full relative overflow-hidden flex items-center justify-center perspective-1000">
            <motion.div
              style={{
                x: imageX,
                y: imageY,
                rotateX,
                rotateY,
                scale: 1.15,
              }}
              className="w-full h-full absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                alt="Abstract Art"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12 text-white z-10 block"
            >
              <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
                <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">Art of Security</h2>
                <p className="text-white/80 font-medium text-sm leading-relaxed hidden md:block">
                  Experience the next generation of digital authentication. Fast, secure, and beautifully designed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          animation: blobFloat 12s ease-in-out infinite alternate;
        }
        @keyframes blobFloat {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .group-hover\\:animate-shine:hover {
          animation: shine 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export default LoginScreen;