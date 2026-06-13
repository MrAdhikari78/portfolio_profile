import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Todo List App",
      description: "A modern, feature-rich todo list application designed for productivity and task management. Helps users organize, prioritize, and track their daily tasks efficiently.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
      github: "https://github.com/MrAdhikari/todolist",
      demo: "https://github.com/MrAdhikari/todolist"
    },
    {
      title: "Trend Analysis with LSTM",
      description: "Deep learning model for trend analysis and time-series forecasting using LSTM neural networks. Predicts market trends and patterns with high accuracy for financial data analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "LSTM", "TensorFlow", "Pandas", "NumPy"],
      github: "https://github.com/MrAdhikari/lstm",
      demo: "https://github.com/MrAdhikari/lstm"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in full-stack 
            development and modern DevOps practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="gap-2 w-full">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="gap-2 w-full">
                      <ExternalLink className="h-4 w-4" />
                      View
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}