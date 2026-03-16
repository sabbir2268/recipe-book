import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChefHat,
  Mail,
  Lock,
  User,
  Image as ImageIcon,
  Chrome,
  Check,
  X,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "../components/MotionWrapper";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");

  // const passwordValidation = {
  //   hasUppercase: /[A-Z]/.test(password),
  //   hasLowercase: /[a-z]/.test(password),
  //   hasMinLength: password.length >= 6,
  // };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-3 py-8 sm:px-6 sm:py-12">
            {/* Back Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-sm sm:text-base font-semibold text-[var(--primary)] hover:underline btn"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        Home
      </Link>

      <MotionWrapper className="w-full max-w-sm sm:max-w-md">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-5 sm:p-8">

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <ChefHat className="w-7 h-7 sm:w-9 sm:h-9 text-primary-foreground" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
              Create an Account
            </h1>

            <p className="text-muted-foreground text-sm sm:text-lg">
              Join our cooking community today
            </p>
          </div>

          {/* Form */}
          <form className="space-y-3 sm:space-y-4">

            {/* Name */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Photo URL */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Photo URL
              </label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password Validation */}
            {/* {password && (
              <div className="space-y-1.5 sm:space-y-2 p-2.5 sm:p-3 bg-secondary/30 rounded-lg">
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  Password must contain:
                </p>
                <div className="space-y-1">

                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    {passwordValidation.hasUppercase ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={passwordValidation.hasUppercase ? "text-green-500" : "text-muted-foreground"}>
                      At least one uppercase letter
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    {passwordValidation.hasLowercase ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={passwordValidation.hasLowercase ? "text-green-500" : "text-muted-foreground"}>
                      At least one lowercase letter
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    {passwordValidation.hasMinLength ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={passwordValidation.hasMinLength ? "text-green-500" : "text-muted-foreground"}>
                      Minimum 6 characters
                    </span>
                  </div>

                </div>
              </div>
            )} */}

            <button
              type="submit"
              className="w-full h-10 sm:h-11 bg-[var(--primary)] text-primary-foreground rounded-lg hover:bg-[var(--primary)]/90 transition-colors font-semibold text-sm sm:text-base"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4 sm:my-6">
            <div className="relative flex justify-center text-md sm:text-lg">
              <span className="px-3 sm:px-4 bg-card text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full h-10 sm:h-11 flex items-center justify-center gap-2 border border-border rounded-lg hover:bg-[var(--accent)] transition-colors font-semibold text-sm sm:text-base">
            <Chrome className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Google</span>
          </button>

          {/* Login Link */}
          <p className="mt-4 sm:mt-6 text-center text-mg sm:text-lg text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-[var(--primary)] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </MotionWrapper>
    </div>
  );
};
