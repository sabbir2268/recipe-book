import { useState } from "react";
import { Link } from "react-router-dom";
import { ChefHat, Mail, Lock, Chrome, ArrowLeft } from "lucide-react";
import MotionWrapper from "../components/MotionWrapper";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-4 py-12 relative">
                  {/* Back Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-sm sm:text-base font-semibold text-[var(--primary)] hover:underline btn"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        Home
      </Link>

      <MotionWrapper className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-9 h-9 text-primary-foreground" />
            </div>

            <p className="text-muted-foreground text-2xl">
              Login to access your recipes
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg text-foreground">
                <Mail className="w-4 h-4" /> Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 border border-border rounded-lg px-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg text-foreground">
                <Lock className="w-4 h-4" /> Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 border border-border rounded-lg px-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-md text-[var(--primary)] hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-[var(--primary)] text-primary-foreground rounded-lg hover:bg-[var(--primary)]/80 transition-colors font-semibold text-lg"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="relative flex justify-center text-lg">
              <span className="px-4 bg-card text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <button className="w-full h-11 flex items-center justify-center gap-2 border border-border rounded-lg hover:bg-[var(--accent)] transition-colors font-semibold text-lg">
            <Chrome className="w-5 h-5" />
            <span>Google</span>
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-md text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </MotionWrapper>
    </div>
  );
};