import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, TestTube } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "C++"]
    },
    {
      icon: TestTube,
      title: "AI / Machine Learning",
      skills: ["OpenCV", "TensorFlow", "PyTorch"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across AI and machine learning, with a strong foundation in modern development and scalable architectures.
          </p>
        </div>
        
        {/* Changed to flex layout on larger screens to keep them centered naturally */}
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="w-full md:w-1/2 lg:max-w-md h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}