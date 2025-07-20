import {
  Code2,
  Database,
  Palette,
  GitBranch,
  Terminal,
  Zap,
  Layout,
  Monitor
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: Code2,
      description: 'Modern component-based frontend library',
    },
    {
      name: 'Next.js',
      icon: Layout,
      description: 'Fullstack React framework with routing and SSR',
    },
    {
      name: 'TypeScript',
      icon: Terminal,
      description: 'Typed JavaScript for safer and scalable development',
    },
    {
      name: 'Tailwind CSS',
      icon: Palette,
      description: 'Utility-first CSS framework for rapid styling',
    },
    {
      name: 'Redux',
      icon: GitBranch,
      description: 'Predictable state management for React apps',
    },
    {
      name: 'Context API',
      icon: GitBranch,
      description: 'Built-in React solution for app-level state',
    },
    {
      name: 'Agile & Scrum',
      icon: Zap,
      description: 'Collaborative development and iterative delivery practices',
    },
    {
      name: 'Jest',
      icon: Zap,
      description: 'JavaScript unit testing framework',
    },
    {
      name: 'Cypress',
      icon: Zap,
      description: 'End-to-end testing for web apps',
    },
    {
      name: 'Node.js',
      icon: Database,
      description: 'Server-side JavaScript runtime environment',
    },
    {
      name: 'Firebase',
      icon: Database,
      description: 'BaaS with Firestore, Auth, and Cloud Functions',
    },
    {
      name: 'Python',
      icon: Terminal,
      description: 'Flexible language for scripting and data science',
    },
    {
      name: 'Pandas',
      icon: Database,
      description: 'Python library for data analysis and manipulation',
    },
    {
      name: 'NumPy',
      icon: Database,
      description: 'Scientific computing with Python arrays',
    },
    {
      name: 'scikit-learn',
      icon: Monitor,
      description: 'Machine learning algorithms and tools',
    },
  ];

  return (
    <section id="skills" className="sm:py-20 py-6 relative overflow-hidden">
      <div className="absolute inset-0  from-accent/5  to-primary/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:mb-16 mb-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto">
            I specialize in modern frontend technologies and continually explore AI, machine learning, and data science to broaden my technical perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="group rounded-xl p-6 bg-card-gradient transition-all hover-lift hover-glow backdrop-blur cursor-pointer"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-gradient-primary mb-4 transition-all group-hover:shadow-glow group-hover:animate-glow">
                  <skill.icon className="sm:w-8 sm:h-8 w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                <p className="text-sm text-muted group-hover:text-white transition-colors">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center sm:mt-16 my-6">
          <blockquote className="text-base sm:text-xl font-light text-muted italic max-w-4xl mx-auto">
            "Growth happens between confusion and clarity."
          </blockquote>
          <p className="text-sm text-muted mt-4 font-mono">-Nat Turner</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;