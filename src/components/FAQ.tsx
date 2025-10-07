import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Sora 2 required to use Elvionai?",
      answer: "No, we use Sora 2-style generation technology. You don't need access to OpenAI's Sora - just tag @TheElvionAI on X/Twitter with your prompt and we handle everything.",
    },
    {
      question: "How long do renders take?",
      answer: "Most videos render in 2-5 minutes depending on complexity and queue length. You'll receive a reply on X as soon as your video is ready, along with a link to view and download.",
    },
    {
      question: "Who owns the rights to generated videos?",
      answer: "You retain full creative rights to videos generated from your prompts. Elvionai holds a license to display them in our gallery for promotional purposes. You can mint, sell, or share your videos freely.",
    },
    {
      question: "Is Elvionai affiliated with OpenAI?",
      answer: "No, Elvionai is an independent community AI project. We use Sora-style generation technology but are not affiliated with or endorsed by OpenAI.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Elvionai
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl px-6 border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6 text-lg font-heading">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Compliance Disclaimer */}
        <div className="max-w-3xl mx-auto mt-12 glass rounded-2xl p-6 text-center animate-fade-in">
          <h3 className="font-heading font-bold text-lg mb-3">
            ⚠️ Important Disclaimer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Elvionai is a community AI project with creative utility features. This is not financial advice. 
            No promise of profit. Always DYOR (Do Your Own Research). We enforce strict content policies: 
            no harmful, illegal, or NSFW prompts will be processed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

