import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const IndexNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Index", href: "/" },
    { label: "How it works", href: "/platform#how-it-works" },
    { label: "Roadmap", href: "/platform#roadmap" },
    { label: "FAQ", href: "/platform#faq" },
    { label: "Read the paper", href: "/assets/elvion-paper.pdf", external: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="text-2xl font-heading font-bold gradient-text hover:scale-105 transition-transform"
            aria-label="Elvionai home"
          >
            Elvionai
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
            <Button
              onClick={() =>
                window.open(
                  "https://twitter.com/intent/tweet?text=@TheElvionAI%20make%20me%20a%20video%20of%20",
                  "_blank"
                )
              }
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            >
              Tag us on X
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 glass rounded-lg mt-2 px-4">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <Button
              onClick={() =>
                window.open(
                  "https://twitter.com/intent/tweet?text=@TheElvionAI%20make%20me%20a%20video%20of%20",
                  "_blank"
                )
              }
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Tag us on X
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default IndexNavbar;
