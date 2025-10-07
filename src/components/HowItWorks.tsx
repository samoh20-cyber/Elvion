import { Twitter, Cpu, Video } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Twitter,
      title: "Post on X",
      description: "Tweet '@TheElvionAI make a 10s cyberpunk cat walking in neon rain'",
      step: "01",
    },
    {
      icon: Cpu,
      title: "AI Renders",
      description: "Our pipeline picks it up, renders with Sora 2, and uploads",
      step: "02",
    },
    {
      icon: Video,
      title: "Get Your Video",
      description: "We reply with your video + mintable collectible link",
      step: "03",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create stunning AI videos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:glow-primary">
                <div className="absolute -top-4 -right-4 text-6xl font-heading font-black text-primary/10">
                  {step.step}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow-primary">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-muted-foreground">Pipeline Status: Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;