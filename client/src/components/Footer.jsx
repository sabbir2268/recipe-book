import {
  ChefHat,
  Github,
  Instagram,
  Linkedin,
  Facebook,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "All Recipes", path: "/recipes" },
    { title: "Add Recipe", path: "/add-recipe" },
  ];

  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];

  const socialLinks = [
    {
      title: "facebook",
      path: "https://www.facebook.com/sabbir2268/",
      icon: Facebook,
    },
    {
      title: "instagram",
      path: "https://www.instagram.com/sabbir2268i/",
      icon: Instagram,
    },
    {
      title: "linkedin",
      path: "https://www.linkedin.com/in/mdsabbir2268/",
      icon: Linkedin,
    },
    {
      title: "github",
      path: "https://github.com/",
      icon: Github,
    },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[var(--primary)] rounded-xl flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-primary-foreground" />
              </div>

              <span className="text-xl font-semibold text-foreground">
                Recipe Book
              </span>
            </div>

            <p className="text-md text-muted-foreground">
              Discover, cook, and share amazing recipes from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>

            <ul className="space-y-2 flex gap-3 md:flex-col">
              {quickLinks.map(({ title, path }) => (
                <li key={title}>
                  <Link
                    to={path}
                    className="text-md text-muted-foreground hover:text-[var(--primary)] transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Categories</h3>

            <ul className="space-y-2 flex gap-3 md:flex-col">
              {categories.map((category) => (
                <li
                  key={category}
                  className="text-md text-muted-foreground"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>

            <div className="flex gap-3">
              {socialLinks.map(({ title, path, icon: Icon }) => (
                <a
                  key={title}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary)]/80 hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-md text-muted-foreground flex items-center justify-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Recipe
            Book © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;