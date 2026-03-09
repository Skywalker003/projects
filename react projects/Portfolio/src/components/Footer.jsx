import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 flex flex-col items-center justify-center gap-4">
      <a
        href="#hero"
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>

      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Sri Vikas. All rights reserved.
      </p>
    </footer>
  );
};
