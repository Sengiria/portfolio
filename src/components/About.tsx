import { Dice5, Code, Brush, Gamepad2, NotebookPen } from 'lucide-react';

const About = () => {
  const hobbies = [
    { icon: Brush, text: 'Digital Illustration' },
    { icon: Gamepad2, text: 'Gaming & Strategy Games' },
    { icon: NotebookPen, text: 'Writing' },
    { icon: Dice5, text: 'Board Games & Escape Rooms' }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-base sm:text-xl text-muted">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass bg-gradient-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center sm:justify-start">
                <Code className="mr-3 text-primary" size={28} />
                My Journey
              </h3>
              <p className="text-muted leading-relaxed mb-4 text-center sm:text-start">
                Growing up, I was lucky to have a father who worked as an IT administrator and loved video games — we played together all the time, from classics to competitive titles. That early exposure not only made me a lifelong gamer, but also sparked a deep curiosity about how things work behind the screen.
                What started as a hobby quickly turned into a passion. Over time, I found myself drawn to the creative and technical challenges of development — and I wouldn’t have it any other way.
              </p>
              <p className="text-muted leading-relaxed text-center sm:text-start">
                My curiosity naturally expanded beyond code — I started learning how to design by drawing on my iPad, experimenting with UX, and diving into the backend to understand how everything connects. Whether it’s data flow, interface polish, or even storytelling, I love understanding how all the pieces come together to shape the final experience.
              </p>
            </div>

            <div className="glass bg-gradient-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                When I'm not coding...
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map(hobby => (
                  <div
                    key={hobby.text}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                  >
                    <hobby.icon className="text-accent" size={20} />
                    <span className="text-sm text-foreground">{hobby.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group hover-lift hover-glow">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src={`${import.meta.env.BASE_URL}cv_image.jpg`}
                alt="Developer at work"
                className="relative w-full h-96 object-cover rounded-xl shadow-card object-top scale-x-[-1]"
              />
            </div>

            <div className="relative group hover-lift hover-glow">
              <div className="absolute inset-0 bg-gradient-accent rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src={`${import.meta.env.BASE_URL}cats.jpg`}
                alt="Developer workspace"
                className="relative w-full h-64 object-cover rounded-xl shadow-card object-top"
              />
            </div>
            <p className="text-sm text-muted mt-2 text-center italic">
              Luna & Ciri – my loyal code review assistants
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <blockquote className="text-base sm:text-xl font-light text-muted italic max-w-4xl mx-auto">
            "Any sufficiently advanced technology is indistinguishable from {' '}
            <span className="text font-medium">magic.</span>"
          </blockquote>
          <p className="text-sm text-muted mt-4 font-mono">- Arthur C. Clarke</p>
        </div>
      </div>
    </section>
  );
};

export default About;