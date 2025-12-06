const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Ankit Choudhary. Crafted with intention.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ankit611/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@ankit611"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Medium
            </a>
            <a
              href="https://unsplash.com/@ankitch6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Unsplash
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
