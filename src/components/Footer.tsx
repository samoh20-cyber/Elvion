import { Twitter, Github, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing!");
      setEmail("");
    }
  };

  const links = {
    product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Gallery", href: "#gallery" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "FAQ", href: "#faq" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Whitepaper", href: "#" },
      { label: "Brand Kit", href: "#" },
      { label: "API Docs", href: "#" },
    ],
    legal: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Content Policy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  };

  const socials = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/Elvionai" },
    { icon: MessageCircle, label: "Discord", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@elvionai.com" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
              Elvionai
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Turn X/Twitter mentions into stunning Sora 2-style AI videos. 
              The future of creative AI meets blockchain.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Subscribe to updates
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass border-primary/20 focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
                >
                  Join
                </Button>
              </div>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 Elvionai. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;