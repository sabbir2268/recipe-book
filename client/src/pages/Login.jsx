import { Link, useNavigate } from "react-router-dom";
import { ChefHat, Mail, Lock, Chrome, ArrowLeft } from "lucide-react";
import MotionWrapper from "../components/MotionWrapper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email?.trim() || !password?.trim()) {
      alert("Please fill in all required fields!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;
      alert(`${user.email} logged in successfully`);
      navigate("/");
    } catch (error) {
      console.log(error.code, error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-4 py-10 relative">
      <MotionWrapper className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-5">
          {/* Top */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[var(--primary)] hover:underline"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Home
            </Link>
          </div>

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
          <form onSubmit={handleLogin} className="space-y-3">
            {/* Email */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg text-foreground">
                <Mail className="w-4 h-4" /> Email
              </label>

              <input
                type="email"
                name="email" // ✅ REQUIRED
                placeholder="your@email.com"
                autoComplete="email"
                className="w-full h-11 border border-border rounded-lg px-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg text-foreground">
                <Lock className="w-4 h-4" /> Password
              </label>

              <input
                type="password"
                name="password" // ✅ REQUIRED
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full h-11 border border-border rounded-lg px-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Forgot */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-[var(--primary)] hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-11 bg-[var(--primary)] text-primary-foreground rounded-lg hover:bg-[var(--primary)]/80 transition-colors font-semibold text-lg"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4 text-center">
            <span className="px-4 bg-card text-muted-foreground text-sm">
              Or continue with
            </span>
          </div>

          {/* Google */}
          <button className="w-full h-11 flex items-center justify-center gap-2 border border-border rounded-lg hover:bg-[var(--accent)] transition-colors font-semibold text-lg">
            <Chrome className="w-5 h-5" />
            <span>Login with Google</span>
          </button>

          {/* Register */}
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
