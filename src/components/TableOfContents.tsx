interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection: string;
}

const TableOfContents = ({ sections, activeSection }: TableOfContentsProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside 
      className="hidden lg:block w-64 sticky top-24 self-start"
      aria-label="Table of contents"
    >
      <nav className="glass p-6 rounded-xl space-y-1">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
          Contents
        </h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default TableOfContents;
