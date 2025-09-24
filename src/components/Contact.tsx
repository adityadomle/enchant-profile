import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "khushi.chetule@example.com",
      href: "mailto:khushi.chetule@example.com",
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "khushichetule09",
      href: "https://github.com/khushichetule09",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Khushi Chetule",
      href: "https://linkedin.com/in/khushi-chetule",
      color: "from-pink-500 to-purple-400"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </div>
        
        <div className="glass-card text-center mb-12 animate-scale-in">
          <MessageCircle size={48} className="mx-auto mb-6 text-pink-500" />
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Ready to Start a Project?
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm always excited to work on new challenges and bring creative ideas to life. 
            Whether you need a modern web application, want to discuss a collaboration, 
            or just want to say hello, I'd love to hear from you.
          </p>
          <Button 
            size="lg"
            className="gradient-primary text-white transition-colors duration-200 px-8 py-4 text-lg font-semibold rounded-full"
            asChild
          >
            <a href="mailto:khushi.chetule@example.com" className="flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`glass-card professional-card text-center animate-fade-in-up animate-delay-${(index + 1) * 100} block`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                <link.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold gradient-text mb-2">
                {link.label}
              </h3>
              <p className="text-muted-foreground">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;