import { Github, LinkedIn, Email } from '../ui/Icons';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary py-12">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Yuganshi Agrawal. Built with React & Tailwind CSS.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/yuganshiii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yuganshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:yuganshi@umich.edu"
              className="text-text-secondary hover:text-accent-primary transition-colors"
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
