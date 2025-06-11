import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  PenTool, 
  TestTube,
  GitBranch,
  Cloud,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8" />,
      skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8" />,
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["AWS", "Docker", "CI/CD", "Vercel", "Netlify", "Heroku"]
    },
    {
      title: "Testing",
      icon: <TestTube className="h-8 w-8" />,
      skills: ["Jest", "React Testing Library", "Cypress", "TDD", "E2E Testing"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Git Flow"]
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="h-8 w-8" />,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Responsive Design"]
    },
    {
      title: "Other",
      icon: <Code className="h-8 w-8" />,
      skills: ["Agile/Scrum", "Problem Solving", "Technical Documentation", "SEO", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{category.title}</h3>
                <ul className="space-y-1 w-full">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}