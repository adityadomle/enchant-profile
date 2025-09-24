import { Briefcase, Code2, GitFork } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Frontend Developer Intern",
      company: "CodeAlpha",
      period: "2024 - Present",
      description: "Building modern web applications using React and the MERN stack. Focused on creating responsive, user-friendly interfaces and implementing clean, maintainable code architecture.",
      skills: ["React", "JavaScript", "MERN Stack", "UI/UX Implementation"],
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: GitFork,
      title: "Open Source Contributor",
      company: "Social Summer of Code 2025",
      period: "2025",
      description: "Contributing to open-source projects, collaborating with developers worldwide, and gaining experience with version control, code reviews, and collaborative development practices.",
      skills: ["Git", "Collaboration", "Code Review", "Open Source"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and contributions to the tech community
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.title}
              className={`timeline-item animate-slide-in-left animate-delay-${(index + 1) * 200}`}
            >
              <div className="glass-card hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <exp.icon size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold gradient-text mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm font-medium bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full text-pink-700 mt-2 sm:mt-0 self-start">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;