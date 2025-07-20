import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A fully responsive web shop featuring cart management, secure Stripe payments, and dynamic product display powered by Printify — built with love and a bit of cat magic.',
            image: "/intbusinesscats.png",
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Firebase', "Printify"],
            liveUrl: 'https://www.internationalbusinesscats.store/',
            githubUrl: ''
        },
        {
            id: 2,
            title: 'Quiz game - Single Player',
            description: 'A fast-paced single-player quiz game with difficulty levels, category selection, and animated battle effects.',
            image: "/battle-quiz.png",
            technologies: ['React', 'Tailwind CSS', 'Typescript', 'Framer Motion'],
            liveUrl: 'https://sengiria.github.io/battle-quiz/',
            githubUrl: 'https://github.com/Sengiria/battle-quiz'
        },
        {
            id: 3,
            title: 'Quiz game - Multiplayer',
            description: 'A real-time multiplayer quiz battle where players compete with synced answers, Firebase logic, and smooth transitions.',
            image: "/battle-quiz-arena.png",
            technologies: ['React', 'Firebase', 'Typescript', 'Framer Motion'],
            liveUrl: 'https://sengiria.github.io/battle-quiz-arena/',
            githubUrl: 'https://github.com/Sengiria/battle-quiz-arena'
        },
        {
            id: 4,
            title: 'Chess',
            description: 'A polished chess game implementation with all official rules — built with attention to logic, layout, and UI consistency.',
            image: "/chess.png",
            technologies: ['React', 'Tailwind CSS', 'Typescript'],
            liveUrl: 'https://sengiria.github.io/chess/',
            githubUrl: 'https://github.com/Sengiria/chess'
        },
    ];

    return (
        <section id="portfolio" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0  from-accent/5  to-primary/5"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Featured Projects</span>
                    </h2>
                    <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto">
                        A showcase of my recent work and creative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group glass bg-gradient-card rounded-xl overflow-hidden shadow-card hover-lift hover:shadow-glow transition-all duration-500 hover-glow"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.image}`}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                                        <button
                                            className="flex items-center bg-primary hover-glow text-[#0a0c10] hover:bg-[#6da2f8] px-4 py-2 text-sm rounded-lg transition cursor-pointer"
                                            onClick={() => window.open(project.liveUrl, '_blank')}
                                        >
                                            <ExternalLink size={16} className="mr-1" />
                                            Live Demo
                                        </button>

                                        <button
                                            className="flex items-center border border-white text-white hover:bg-white hover:text-black px-4 py-2 text-sm rounded-lg transition cursor-pointer"
                                            onClick={() => window.open(project.githubUrl, '_blank')}
                                        >
                                            <Github size={16} className="mr-1" />
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted mb-4 ">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium text-muted rounded-full border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-lg text-muted mb-6">
                        Want to see more projects or discuss a collaboration?
                    </p>
                    <button
                        className="hover-glow text-accent-foreground font-semibold px-8 py-4 text-lg rounded-lg transition hover-lift cursor-pointer"
                        style={{ background: 'linear-gradient(135deg, rgb(22, 162, 73), rgb(28, 206, 94))' }}
                        onClick={() => {
                            const section = document.getElementById('contact');
                            if (section) section.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Let's Work Together
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;