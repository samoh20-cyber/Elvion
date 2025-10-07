import { useState } from "react";
import { Play, Clock, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// ---- Import your videos from src/assets/videos (Vite will hash the URLs) ----
import aladin from "@/assets/videos/aladin pulled over by cops.mp4";
import catMan from "@/assets/videos/cat and man pulled over.mp4";
import catMoto from "@/assets/videos/cat on motorcycle.mp4";
import catRun from "@/assets/videos/cat run away from cops.mp4";
import catSports from "@/assets/videos/cat runs awak in car sports car.mp4";
import catTrampoline from "@/assets/videos/cat trampoline.mp4";
import copShootsCat from "@/assets/videos/cop shoots cat in the cat (needs editing).mp4";
import countingMoney from "@/assets/videos/counting money.mp4";
import dogDriving from "@/assets/videos/dog driving.mp4";
import einsteinBoxing from "@/assets/videos/einstin boxing.mp4";
import goblinRun from "@/assets/videos/goblin run awak from cops.mp4";
import hitlerRunCar from "@/assets/videos/hitler runs away in car.mp4";
import kittenArrested from "@/assets/videos/kitten arrested in home.mp4";
import needsEditing from "@/assets/videos/needs edditing.mp4";
import spongebobAOT from "@/assets/videos/spongebob attackon titannneds editing.mp4";
import spongebobPulled from "@/assets/videos/spongebob pulled over.mp4";
import stephenHawkingIsland from "@/assets/videos/steve hawking on island.mp4";
import steveWheelchair from "@/assets/videos/steve hokin on wheelchair.mp4";
import tylenolArrested from "@/assets/videos/tylenol arrested.mp4";

// ---- Types ----
type Category = "All" | "Cats" | "Police" | "Memes" | "Random";

interface Example {
  id: number;
  handle: string;
  prompt: string;
  duration: string;
  category: Exclude<Category, "All"> | string;
  video: string;
  thumbnail?: string; // optional poster if you want one later
}

// ---- Data (using imports above) ----
const EXAMPLES: Example[] = [
  { id: 1,  handle: "@cryptoartist",  prompt: "Aladdin pulled over by cops",        duration: "10s", category: "Memes", video: aladin },
  { id: 2,  handle: "@aidev",         prompt: "Cat and man pulled over. Cat sticks up middle finger",               duration: "10s",  category: "Police",  video: catMan },
  { id: 3,  handle: "@blockchainfan", prompt: "Cat and man runs away from police on motorcycle",                   duration: "16s",  category: "Cats", video: catMoto },
  { id: 4,  handle: "@soraenthusiast",prompt: "Cat runs away from cops",             duration: "10s", category: "Cats",  video: catRun },
  { id: 5,  handle: "@web3builder",   prompt: "Cat runs away in sports car",         duration: "20s", category: "Cats",  video: catSports },
  { id: 6,  handle: "@creator",       prompt: "Fat cat on a trampoline",                 duration: "10s",  category: "Cats",  video: catTrampoline },
  { id: 7,  handle: "@designer",      prompt: "Cop shoots Cat In The Hat",      duration: "10s", category: "Police",video: copShootsCat },
  { id: 8,  handle: "@artist",        prompt: "Counting money",                      duration: "13s",  category: "Random",video: countingMoney },
  { id: 9,  handle: "@techie",        prompt: "Dog runs away from police",                         duration: "10s",  category: "Random",  video: dogDriving },
  { id: 10, handle: "@naturelover",   prompt: "Einstein explaining his boxing match",                     duration: "10s", category: "Memes",  video: einsteinBoxing },
  { id: 11, handle: "@fashionista",   prompt: "Goblin runs away from cops",          duration: "10s", category: "Police",  video: goblinRun },
  { id: 12, handle: "@abstract",      prompt: "Hitler runs away in a super car",           duration: "10s", category: "Random",video: hitlerRunCar },
  { id: 13, handle: "@abstract",      prompt: "Kitten arrested in home",             duration: "10s",  category: "Cats",  video: kittenArrested },
  { id: 14, handle: "@abstract",      prompt: "Spongebob and Patrick cooking in the lab",                       duration: "10s",  category: "Memes",video: needsEditing },
  { id: 15, handle: "@abstract",      prompt: "Spongebob in Attack on Titan", duration: "19s", category: "Memes",video: spongebobAOT },
  { id: 16, handle: "@abstract",      prompt: "Spongebob pulled over and runs away from cops",               duration: "10s",  category: "Memes",video: spongebobPulled },
  { id: 17, handle: "@abstract",      prompt: "Stephen Hawking on Epstein island",           duration: "16s", category: "Random",  video: stephenHawkingIsland },
  { id: 18, handle: "@abstract",      prompt: "Stephen Hawking racing on track",           duration: "21s", category: "Random",  video: steveWheelchair },
  { id: 19, handle: "@abstract",      prompt: "Tylenol arrested",                    duration: "10s",  category: "Random",video: tylenolArrested },
];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [selectedVideo, setSelectedVideo] = useState<Example | null>(null);

  const categories: Category[] = ["All", "Cats", "Police", "Memes", "Random"];

  const filteredExamples =
    filter === "All" ? EXAMPLES : EXAMPLES.filter((ex) => ex.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Live <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Community-created AI videos from real X prompts
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredExamples.map((example, index) => (
            <div
              key={example.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedVideo(example)}
            >
              <div className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-primary">
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={example.video}
                    // poster={example.thumbnail} // optional
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) =>
                      (e.currentTarget as HTMLVideoElement).play()
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget as HTMLVideoElement).pause()
                    }
                    onError={(e) =>
                      console.warn(
                        "Video failed to load:",
                        (e.target as HTMLVideoElement).currentSrc
                      )
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <Play className="w-12 h-12 text-primary animate-glow-pulse" />
                  </div>
                  <div className="absolute top-3 right-3 glass px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {example.duration}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <User className="w-3 h-3" />
                    {example.handle}
                  </div>
                  <p className="text-sm text-foreground line-clamp-2">
                    {example.prompt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want yours featured?</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            onClick={() =>
              window.open(
                "https://twitter.com/intent/tweet?text=@TheElvionAI%20",
                "_blank"
              )
            }
          >
            Tag @TheElvionAI Now
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={(open) => {
          if (!open) {
            const v = document.getElementById(
              "gallery-modal-video"
            ) as HTMLVideoElement | null;
            v?.pause();
            setSelectedVideo(null);
          }
        }}
      >
        <DialogContent className="glass max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">
              {selectedVideo?.prompt}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              {selectedVideo ? (
                <video
                  id="gallery-modal-video"
                  src={selectedVideo.video}
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  // If you want it to start silently on open, uncomment both:
                  // autoPlay
                  // muted
                  onError={(e) =>
                    console.warn(
                      "Modal video failed to load:",
                      (e.target as HTMLVideoElement).currentSrc
                    )
                  }
                />
              ) : null}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Created by {selectedVideo?.handle}
              </span>
              <span className="text-muted-foreground">
                Duration: {selectedVideo?.duration}
              </span>
            </div>
            <p className="text-muted-foreground italic">
              "{selectedVideo?.prompt}"
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
