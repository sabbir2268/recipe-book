import { Link, useNavigate } from "react-router-dom";
import {
  ChefHat,
  Mail,
  Lock,
  User,
  Image as ImageIcon,
  Chrome,
  ArrowLeft,
} from "lucide-react";
import MotionWrapper from "../components/MotionWrapper";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Register = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photoURL = formData.get("photoURL");

    if (!name || !email || !password) {
      alert("Please fill in all required fields!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase letter");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Update displayName and photoURL in Firebase Auth
      await updateProfile(user, { displayName: name, photoURL });

      alert("User created successfully!");
      navigate("/auth/login");
    } catch (error) {
      console.error(error.code, error.message);
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      alert(`${user.email} logged in with Google`);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Google Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-3 py-8 sm:px-6 sm:py-5 relative">
      <MotionWrapper className="w-full max-w-sm sm:max-w-md z-10">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-5 sm:p-8">
          <div className="flex justify-between items-center z-50">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[var(--primary)] hover:underline"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Home
            </Link>
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <ChefHat className="w-7 h-7 sm:w-9 sm:h-9 text-primary-foreground" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
              Create an Account
            </h1>
          </div>

          <form onSubmit={handleRegister} className="space-y-2 sm:space-y-4">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                autoComplete="username"
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="https://example.com/photo.jpg"
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="flex items-center gap-2 text-sm sm:text-lg text-foreground">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                autoComplete="current-password"
                className="w-full h-10 sm:h-11 border border-border rounded-lg px-3 sm:px-4 text-sm sm:text-base bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-10 sm:h-11 bg-[var(--primary)] text-primary-foreground rounded-lg hover:bg-[var(--primary)]/90 transition-colors font-semibold text-sm sm:text-base"
            >
              Register
            </button>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="w-full h-10 sm:h-11 mt-3 flex items-center justify-center gap-2 border border-border rounded-lg hover:bg-[var(--accent)] transition-colors font-semibold text-sm sm:text-base"
          >
            <Chrome className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Continue With Google</span>
          </button>

          <p className="mt-4 sm:mt-6 text-center text-sm sm:text-lg text-muted-foreground">
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
