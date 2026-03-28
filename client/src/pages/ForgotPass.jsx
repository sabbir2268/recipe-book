import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";

const ForgotPassword = () => {
  useScrollToTop();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
      setEmail(""); // clear input
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
      alert("Failed to send reset email");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
      <div className="max-w-md w-full p-6 border border-[var(--primary)]/20 rounded-xl shadow-lg bg-[var(--background)]">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--foreground)]">
          Reset Password
        </h2>

        {/* Form */}
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-[var(--primary)]/30 p-3 rounded-lg bg-transparent text-[var(--foreground)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* ✅ Submit Button with hover */}
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-[var(--primary)] text-[var(--accent)] font-semibold transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--primary)] hover:scale-[1.02] active:scale-95"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back */}
        <p className="mt-6 text-sm text-center text-[var(--foreground)]/70">
          <Link
            to="/auth/login"
            className="text-[var(--primary)] font-medium hover:underline hover:text-[var(--foreground)] transition"
          >
            ← Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
