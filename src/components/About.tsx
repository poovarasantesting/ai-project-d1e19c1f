import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Mail, 
  MapPin,
  Briefcase,
  GraduationCap, 
  Globe,
  Languages
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Learn more about my background, experience, and what drives me.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            I'm John Doe, a passionate Full Stack Developer
          </h3>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm a dedicated developer with over 5 years of experience creating robust web applications.
              My journey in tech began with a curiosity about how websites work, which evolved into a
              career focused on building elegant, user-centric solutions.
            </p>
            
            <p className="text-muted-foreground">
              I specialize in developing responsive web applications using modern frameworks and
              technologies. My approach combines technical expertise with creative problem-solving
              to deliver exceptional digital experiences.
            </p>
            
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring hiking trails, reading tech blogs,
              or contributing to open-source projects. I'm constantly learning and evolving my skillset
              to stay at the forefront of web development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-primary" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-primary" />
              <span>B.S. Computer Science</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span>New York, USA</span>
            </div>
            <div className="flex items-center">
              <Languages className="h-5 w-5 mr-2 text-primary" />
              <span>English, Spanish</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" download>
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-lg overflow-hidden border-4 border-primary/20">
            <img 
              src="https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=600&auto=format&fit=crop" 
              alt="John Doe" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
            <div className="font-bold text-xl">5+</div>
            <div className="text-sm">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}