import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, BookOpen, Download, ArrowDown, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv__Copy_.pdf';
    link.download = 'Manish_Adhikari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-foreground/10 h-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge 
                variant="secondary" 
                className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                {/* <span className="block"></span> */}
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Manish Adhikari
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg">
                  Software Engineer providing
                  <span className="text-primary"> scalable solutions</span>
                </p>
                
                <p className="text-lg text-muted-foreground/80 max-w-md">
                  Comprehensive expertise across AI/ML and deep learning
                  with a focus on computer vision architectures and scalable engineering.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadCV}
                size="lg" 
                className="group relative overflow-hidden px-8 py-6"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10"
                onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://medium.com/@adhikarimanish555" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <BookOpen className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://github.com/MrAdhikari" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/adhikari314" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:adhikari.manish555@gmail.com">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -bottom-2 -right-2 w-40 h-40 bg-gradient-to-tl from-accent/15 to-primary/5 rounded-full blur-2xl opacity-25"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 group">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-4 border-background/50 shadow-2xl">
                  <ImageWithFallback
                    src="/manish.jpg"
                    alt="Manish Adhikari - Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                {/* <div className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-2xl px-6 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Available for work</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
