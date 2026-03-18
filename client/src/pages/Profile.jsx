import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)] px-4">
      <div className="w-full max-w-md p-8 bg-[var(--card)] rounded-xl shadow-lg text-center">
        <div className="flex flex-col items-center gap-4">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-[var(--primary)]">
            <img
              src={user.photoURL || "https://img.daisyui.com/images/profile/demo/avatar.jpg"}
              alt={user.displayName || "User Avatar"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            {user.displayName || "Not Provided"}
          </h1>

          <div className="space-y-2 text-[var(--foreground)] text-left w-full">
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Account Created:</span>{" "}
              {user.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleString()
                : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;