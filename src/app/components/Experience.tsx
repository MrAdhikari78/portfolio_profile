import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Lightbulb } from "lucide-react";

export function Experience() {
  const skills = [
    {
      category: "AI & Machine Learning",
      description: "Building intelligent systems with reinforcement learning, computer vision, and data-driven modeling.",
      technologies: ["Reinforcement Learning", "Computer Vision", "Deep Learning", "TensorFlow", "PyTorch"]
    },
    {
      category: "ML Engineering",
      description: "Developing scalable AI solutions and optimizing models for real-world deployment.",
      technologies: ["Python", "Scikit-learn", "Keras", "Model Evaluation", "Data Visualization"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Currently focused on building personal projects and developing expertise in 
            AI, reinforcement learning, and computer vision.
          </p>
        </div>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{skill.category}</h3>
                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}