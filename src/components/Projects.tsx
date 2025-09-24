import { ExternalLink, Github, Layers, Globe, Database, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: Globe,
      title: "Modern Web App",
      description: "A comprehensive web application built with React and modern development practices. Features responsive design, smooth animations, and optimized performance for excellent user experience.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      color: "from-pink-400 to-purple-500",
      featured: true
    },
    {
      icon: Database,
      title: "MERN Stack Demo",
      description: "Full-stack application showcasing CRUD operations, user authentication, and real-time data management. Demonstrates proficiency in both frontend and backend development.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      color: "from-purple-500 to-pink-600",
      featured: true
    },
    {
      icon: Palette,
      title: "Creative Frontend Project",
      description: "An innovative frontend project focusing on creative UI/UX design, interactive animations, and modern web technologies. Showcases artistic vision combined with technical skills.",
      tech: ["React", "CSS3", "GSAP", "Three.js"],
      color: "from-pink-500 to-purple-400",
      featured: false
    },
    {
      icon: Layers,
      title: "Component Library",
      description: "Reusable component library built with modern React patterns. Features comprehensive documentation, TypeScript support, and seamless integration capabilities.",
      tech: ["React", "TypeScript", "Storybook", "NPM"],
      color: "from-purple-400 to-pink-500",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in modern web development and creative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card hover-lift animate-scale-in animate-delay-${(index + 1) * 100} ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}>
                <project.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gradient-to-r from-pink-50 to-purple-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium border border-pink-200/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button 
                  size="sm" 
                  className="gradient-primary text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-pink-400/50 text-foreground hover:bg-pink-50 transition-colors duration-300 flex items-center gap-2"
                >
                  <Github size={16} />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-pink-400/50 text-foreground hover:bg-pink-50 hover:border-pink-400 transition-colors duration-300 px-8 py-4 text-lg rounded-full"
            asChild
          >
            <a 
              href="https://github.com/khushichetule09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;