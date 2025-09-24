import { Code, Database, Globe, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Supabase"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Code,
      title: "Tools & Tech",
      skills: ["Git", "VS Code", "Postman", "Firebase"],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Layers,
      title: "Concepts",
      skills: ["Responsive Design", "RESTful APIs", "Component Architecture", "State Management"],
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`glass-card hover-lift animate-scale-in animate-delay-${(index + 1) * 100}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                <category.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-4 gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg px-3 py-2 text-sm font-medium text-center transition-colors hover:from-pink-100 hover:to-purple-100"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;