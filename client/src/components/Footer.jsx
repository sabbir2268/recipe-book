import { ChefHat, Github, Twitter, Instagram, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  const socialLinks = [
    {title: "facebook", path: ""}
  ]
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

            <p className="text-sm text-muted-foreground">
              Discover, cook, and share amazing recipes from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 flex gap-3 md:flex-col">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/recipes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Recipes
                </Link>
              </li>

              <li>
                <Link
                  to="/add-recipe"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Add Recipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
            <ul className="space-y-2 flex gap-3 md:flex-col">
              <li className="text-sm text-muted-foreground">Breakfast</li>
              <li className="text-sm text-muted-foreground">Lunch</li>
              <li className="text-sm text-muted-foreground">Dinner</li>
              <li className="text-sm text-muted-foreground">Dessert</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Recipe
            Book  © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;