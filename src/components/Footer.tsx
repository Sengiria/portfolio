import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-br from-card via-background to-card border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's build something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="mailto:dora.horvath717@gmail.com"
              className="flex items-center space-x-2 text-muted hover:text-primary transition-colors hover-lift"
            >
              <Mail size={20} />
              <span>dora.horvath717@gmail.com</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <p className="text-muted">Available for freelance work</p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/sengiria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full text-muted hover:bg-primary hover:text-[#0a0c10] transition-all duration-300 hover-lift"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://github.com/sengiria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full text-muted hover:bg-primary hover:text-[#0a0c10] transition-all duration-300 hover-lift"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:horvath.dora717@gmail.com"
              className="group flex items-center justify-center w-12 h-12 rounded-full text-muted hover:bg-accent hover:text-[#0a0c10] transition-all duration-300 hover-lift"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-muted hover:text-primary transition-colors font-medium cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="border-t border-border mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text font-mono">&lt;Dev/&gt;</span>
            <span className="text-muted">© {currentYear} All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted">
            <span>Built with</span>
            <span className="text-primary">React</span>
            <span>+</span>
            <span className="text-accent">TypeScript</span>
            <span>+</span>
            <span className="text-primary">Tailwind CSS</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-muted font-mono opacity-50">
            console.log("Thanks for scrolling this far! 🚀");
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;