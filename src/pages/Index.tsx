import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Zap, Image, Wallet, Code, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import TableOfContents from "@/components/TableOfContents";
import IndexNavbar from "@/components/IndexNavbar";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: "mission", title: "Mission" },
    { id: "why-solana", title: "Why Solana & $ELVION" },
    { id: "the-reel", title: "The Reel" },
    { id: "under-the-hood", title: "Under the Hood" },
    { id: "the-portal", title: "The Portal" },
    { id: "roadmap", title: "Roadmap & Future" },
    { id: "vision", title: "Vision" },
  ];

  const cards = [
    { 
      icon: Video, 
      title: "Tweet → Video", 
      description: "Tag us with a prompt and watch AI create your vision",
      link: "/platform#how-it-works" 
    },
    { 
      icon: Image, 
      title: "The Reel", 
      description: "Explore the community gallery of AI-generated videos",
      link: "/platform#gallery" 
    },
    { 
      icon: Wallet, 
      title: "Dashboard", 
      description: "Track your renders, credits, and collectibles",
      link: "/platform#dashboard" 
    },
    { 
      icon: Sparkles, 
      title: "Collectibles", 
      description: "Mint your favorite videos as unique digital assets",
      link: "/platform#roadmap" 
    },
    { 
      icon: Code, 
      title: "SDK/API", 
      description: "Build with Elvion's creative tools and pipeline",
      link: "/platform#roadmap" 
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Introducing Elvion: Where Imagination Takes Motion | Elvionai</title>
        <meta name="description" content="A bridge between human imagination and AI, turning simple words into moving stories. Powered by Sora 2 & Solana." />
        <meta property="og:title" content="Introducing Elvion: Where Imagination Takes Motion" />
        <meta property="og:description" content="A bridge between human imagination and AI, turning simple words into moving stories. Powered by Sora 2 & Solana." />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="Elvionai Team" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Introducing Elvion: Where Imagination Takes Motion",
            "author": {
              "@type": "Organization",
              "name": "Elvionai Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Elvionai"
            },
            "datePublished": "2025-01-01",
            "description": "A bridge between human imagination and AI, turning simple words into moving stories. Powered by Sora 2 & Solana."
          })}
        </script>
      </Helmet>
      <IndexNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span>Powered by Sora 2 & Solana</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight">
            Introducing <span className="gradient-text">Elvion</span>: Where Imagination Takes Motion
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A bridge between human imagination and artificial intelligence, turning simple words into moving stories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8 py-6 h-auto"
              onClick={() => {
                const element = document.getElementById("mission");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Zap className="mr-2" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 h-auto"
              onClick={() => window.open("/assets/elvion-paper.pdf", "_blank")}
            >
              <FileText className="mr-2" />
              Read the paper
            </Button>
          </div>
        </div>
      </section>

      {/* Main Article Layout */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex gap-12 max-w-7xl mx-auto">
          {/* Sticky TOC - Desktop Only */}
          <TableOfContents sections={sections} activeSection={activeSection} />

          {/* Article Content */}
          <article className="flex-1 max-w-[72ch] mx-auto space-y-16">
            <section id="mission" className="scroll-mt-24 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">Mission</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Artificial intelligence has opened new doors for creators, but many of today's tools still feel closed off—too technical, too limited, or too disconnected from the people who use them. Elvion was built to change that. By combining AI video generation with social platforms, we're bringing creativity directly to where people already express themselves every day. Whether it's art, humor, storytelling, or simple curiosity, Elvion makes it easy to visualize ideas instantly, allowing imagination to move freely across the internet.
              </p>
            </section>

            <section id="why-solana" className="scroll-mt-24 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">Why Solana & $ELVION</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To support this vision, we introduced the $ELVION token, built on Solana. It powers the creative engine of the platform and connects users through shared value. Holders of $ELVION gain access to faster rendering times, longer video durations, and premium visual styles that unlock new forms of storytelling. The token also fuels community features like creator rewards, platform upgrades, and The Reel—a growing gallery of all Elvion-generated videos shared by the community.
              </p>
            </section>

            <section id="the-reel" className="scroll-mt-24 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">The Reel</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Reel serves as Elvion's public memory. Every clip created with Elvion is stored with unique metadata, including the original prompt and creator's ID, ensuring transparency and ownership in a decentralized way. It's more than just a showcase; it's a creative archive that captures the pulse of what people are imagining at any given moment. From futuristic landscapes to playful animations, The Reel reflects the world's ideas, expressed through AI motion.
              </p>
            </section>

            <section id="under-the-hood" className="scroll-mt-24 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">Under the Hood</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Behind the scenes, Elvion uses a layered AI system designed to understand text and transform it into rich visual experiences. The process starts by analyzing the user's prompt, identifying its subjects, tone, and style. Then, through a blend of video synthesis, motion modeling, and atmospheric lighting, the system produces a complete scene that feels alive and cinematic. Sometimes, the AI generates surprising results—like unexpected color choices or creative interpretations—but these moments often lead to some of the most memorable outputs. We see these imperfections not as flaws, but as a sign of creativity evolving through technology.
              </p>
            </section>

            <section id="the-portal" className="scroll-mt-24 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">The Portal</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Elvion's web experience, called The Portal, gives users full control. Inside it, anyone can connect their wallet, submit prompts, view render status, and mint their favorite videos as collectibles. The Portal also supports trending prompts, community rankings, and interactive tools for exploring The Reel. Over time, this will expand into a creative hub where users can remix ideas, share feedback, and collaborate with others—all powered by AI and blockchain.
              </p>
            </section>

            <section id="roadmap" className="scroll-mt-24 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">Roadmap & Future</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Looking ahead, Elvion's roadmap focuses on making creativity even more interactive and dynamic. Future versions will include AI characters that persist across videos, adaptive soundtracks that respond to tone, and evolving "world memory" that learns each user's personal style. These features aim to bring storytelling closer to a true collaboration between human imagination and machine creativity.
              </p>
            </section>

            <section id="vision" className="scroll-mt-24 space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Elvion isn't just a tool—it's a movement toward a more open, playful, and connected creative future. Our goal is to make AI video generation a shared experience, where every idea, big or small, has a place to be seen, shared, and celebrated. In a world where content moves faster than ever, Elvion turns simple thoughts into lasting moments of motion, proving that imagination still leads the way.
              </p>
            </section>

            {/* Repeat Paper CTA */}
            <div className="flex justify-center pt-8">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 h-auto"
                onClick={() => window.open("/assets/elvion-paper.pdf", "_blank")}
              >
                <FileText className="mr-2" />
                Read the paper
              </Button>
            </div>
          </article>
        </div>
      </div>

      {/* Card Grid */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 gradient-text">
            Explore the Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.link}
                  className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:glow-primary group cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:animate-glow-pulse" />
                  <h3 className="text-xl font-heading font-bold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
