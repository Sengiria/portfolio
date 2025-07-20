import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const scrollToPortfolio = () => {
        const section = document.getElementById('portfolio');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToSkills = () => {
        const section = document.getElementById('skills');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20">
            <div className="absolute inset-0"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-slide-up">
                    <p className="text-primary font-mono text-lg mb-4">Hi, my name is</p>

                    <h1 className="text-4xl sm:text-7xl font-bold mb-4">
                        <span className="gradient-text">Dora Horvath</span>
                    </h1>

                    <h2 className="text-2xl sm:text-5xl font-bold text-muted mb-8">
                        I strive to build exceptional digital experiences
                    </h2>

                    <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto sm:mb-12 mb-6 ">
                        I'm a passionate frontend developer specializing in creating beautiful,
                        responsive, and user-friendly web applications using modern technologies
                        like <span className="text-primary font-medium">React</span>,
                        <span className="text-accent font-medium"> TypeScript</span>, and
                        <span className="text-primary font-medium"> Tailwind CSS</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:mb-16 mb-6">
                        <button
                            onClick={scrollToPortfolio}
                            className="text-[#0a0c10] font-semibold sm:px-10 sm:py-4 px-6 py-2 text-lg rounded-lg transition transform hover:shadow-[0_0_15px_2px_rgba(59,130,246,0.5)] cursor-pointer hover:-translate-y-1"
                            style={{ background: 'linear-gradient(135deg, rgb(60, 131, 246), rgb(109, 162, 248))' }}
                        >
                            View My Work
                        </button>

                        <button
                            onClick={scrollToContact}
                            className="bg-[#0a0c10] text-[#3b82f6] border border-[#3b82f6] font-semibold sm:px-10 sm:py-4 px-6 py-2 text-lg rounded-lg transition transform hover:bg-[#3b82f6] hover:text-[#0a0c10] cursor-pointer hover:shadow-[0_0_15px_2px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                        >
                            Get In Touch
                        </button>
                    </div>

                    <div className="flex justify-center space-x-6 mb-18">
                        <a
                            href="https://github.com/sengiria"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-500 hover:-translate-y-1 transition-transform duration-200 inline-block"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://linkedin.com/in/sengiria"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-500 hover:-translate-y-1 transition-transform duration-200 inline-block"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="mailto:horvath.dora717@gmail.com"
                            className="text-gray-300 hover:text-blue-500 hover:-translate-y-1 transition-transform duration-200 inline-block"
                        >
                            <Mail size={28} />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToSkills}>
                    <ArrowDown className="text-muted hover:text-blue-500 " size={24} />
                </div>
            </div>
        </section>
    );
};

export default Hero;