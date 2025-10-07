import { Button } from "@/components/ui/button";
import { Sparkles, Twitter } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const socialProof = [
    "@cryptoartist", "@aidev", "@blockchainfan", "@soraenthusiast", "@web3builder"
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-success rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span>Powered by Sora 2-style AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight">
            Turn a <span className="gradient-text">tweet</span> into a{" "}
            <span className="gradient-text">Sora video</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Tag <span className="text-primary font-semibold">@TheElvionAI</span> with a prompt.
            Our AI (Sora 2-style) does the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8 py-6 h-auto"
              onClick={() =>
                window.open(
                  "https://twitter.com/intent/tweet?text=@TheElvionAI%20make%20me%20a%20video%20of%20a%20cyberpunk%20cat%20in%20neon%20rain%20%23Elvionai",
                  "_blank"
                )
              }
            >
              <Twitter className="mr-2" />
              Tag us on X
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 h-auto"
              onClick={() => {
                const element = document.getElementById("gallery");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Watch Examples
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">Trusted by creators</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socialProof.map((handle, i) => (
                <div
                  key={handle}
                  className="glass px-3 py-1.5 rounded-full text-xs text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {handle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;