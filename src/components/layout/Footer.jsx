import { Github, LinkedIn, Email } from '../ui/Icons';

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-foreground text-sm">
            <p className="mb-2 font-medium">Yuganshi Agrawal</p>
            <p className="text-foreground/80">yuganshi@umich.edu</p>
            <p className="text-foreground/80 mt-1">
              © {new Date().getFullYear()} Built with React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yuganshiii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yuganshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:yuganshi@umich.edu"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Email className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
