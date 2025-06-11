import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A Kanban-style project management tool with real-time updates.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=500&auto=format&fit=crop",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with forecasts and location tracking.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=500&auto=format&fit=crop",
      tags: ["React", "Redux", "Weather API", "Chart.js"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A collection of my recent work, showcasing my skills and expertise in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden flex flex-col h-full border-2 hover:border-primary/50 transition-all">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}