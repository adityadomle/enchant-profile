import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-pink-200/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code size={20} className="text-pink-500" />
            <span className="gradient-text font-bold text-xl">Khushi Chetule</span>
            <Code size={20} className="text-pink-500" />
          </div>
          
          <p className="text-muted-foreground mb-4">
            Frontend Developer crafting beautiful digital experiences
          </p>
          
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-pink-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-pink-200/20">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Khushi Chetule. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;