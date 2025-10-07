import { CheckCircle2, Loader2, Palette, Code } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      title: "Launch",
      description: "Website, X bot, examples gallery",
      status: "shipped",
      icon: CheckCircle2,
      features: ["Landing page live", "Twitter bot active", "Gallery with 50+ videos"],
    },
    {
      title: "Creator Dashboard",
      description: "Per-prompt tipping and wallet integration",
      status: "in-progress",
      icon: Loader2,
      features: ["User authentication", "Wallet connection", "Credit system", "Tipping mechanism"],
    },
    {
      title: "SDK & API",
      description: "Open tools for partners",
      status: "planned",
      icon: Code,
      features: ["Developer API", "SDKs (JS, Python)", "Webhooks", "Documentation"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shipped":
        return "text-success";
      case "in-progress":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "shipped":
        return "✅ Shipped";
      case "in-progress":
        return "🚧 In Progress";
      default:
        return "🎨 Planned";
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our journey to revolutionize AI video creation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted"></div>

            {/* Phases */}
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div
                  key={phase.title}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="hidden md:flex relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent items-center justify-center flex-shrink-0 glow-primary">
                      <phase.icon
                        className={`w-8 h-8 text-primary-foreground ${
                          phase.status === "in-progress" ? "animate-spin" : ""
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass rounded-2xl p-6 md:p-8 hover:glow-primary transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-heading font-bold">
                          {phase.title}
                        </h3>
                        <span className="text-xs px-3 py-1 rounded-full glass">
                          {getStatusBadge(phase.status)}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {phase.description}
                      </p>

                      <ul className="space-y-2">
                        {phase.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              phase.status === "shipped" ? "bg-success" :
                              phase.status === "in-progress" ? "bg-warning" :
                              "bg-muted-foreground"
                            }`}></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Timeline subject to change. Follow{" "}
            <a
              href="https://twitter.com/Elvionai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @TheElvionAI
            </a>{" "}
            for updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
