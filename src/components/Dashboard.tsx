import { Button } from "@/components/ui/button";
import { Wallet, Twitter, BarChart3, History } from "lucide-react";
const Dashboard = () => {
  const features = [{
    icon: History,
    label: "Prompt History",
    description: "Track all your video requests"
  }, {
    icon: BarChart3,
    label: "Render Status",
    description: "Real-time generation updates"
  }, {
    icon: Wallet,
    label: "Credits Balance",
    description: "Manage your usage"
  }, {
    icon: Twitter,
    label: "X Integration",
    description: "Connected @TheElvionAI account"
  }];
  return <section id="dashboard" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Creator <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your AI video creations and rewards
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Dashboard Preview */}
          <div className="glass rounded-3xl p-8 md:p-12 mb-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => <div key={feature.label} className="glass rounded-2xl p-6 hover:glow-primary transition-all duration-300" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1">
                        {feature.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="text-center glass rounded-xl p-4">
                <div className="text-3xl font-heading font-bold gradient-text mb-1">
                  24
                </div>
                <div className="text-xs text-muted-foreground">Videos Created</div>
              </div>
              <div className="text-center glass rounded-xl p-4">
                <div className="text-3xl font-heading font-bold gradient-text mb-1">
                  156
                </div>
                <div className="text-xs text-muted-foreground">Credits Remaining</div>
              </div>
              
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary" onClick={() => alert("Dashboard coming soon!")}>
                <Twitter className="mr-2 w-5 h-5" />
                Sign in with X
              </Button>
              
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 rounded-full bg-warning animate-pulse"></div>
              <span className="text-muted-foreground">Dashboard launching Q2 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Dashboard;