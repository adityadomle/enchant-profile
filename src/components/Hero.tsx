import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-pink-600/20" />
      
      {/* Butterfly Animation */}
      <div className="butterfly" />
      
      {/* Glass Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Khushi Chetule</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-foreground/90">
            Frontend Developer | MERN Stack Enthusiast
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I design and build modern, responsive, and user-friendly web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full"
              asChild
            >
              <a 
                href="https://github.com/khushichetule09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                View GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-pink-400/50 text-foreground hover:bg-pink-50 hover:border-pink-400 transition-colors duration-300 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                <ExternalLink size={20} />
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;