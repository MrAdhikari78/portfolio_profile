import { Card, CardContent } from "./ui/card";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "adhikari.manish555@gmail.com",
      href: "mailto:adhikari.manish555@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9820228222",
      href: "tel:+977 9820228222"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/adhikari314",
      href: "https://linkedin.com/in/adhikari314"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@adh1kari",
      href: "https://instagram.com/adh1kari"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life?
          </p>
        </div>
        
        {/* Modern 2-column grid on larger screens, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            const content = (
              <div className="flex items-center gap-4">
                <Icon className="h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">{contact.label}</h4>
                  <p className="text-muted-foreground">{contact.value}</p>
                </div>
              </div>
            );

            if (contact.href) {
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 h-full hover:border-primary/50">
                    <CardContent className="p-6">
                      {content}
                    </CardContent>
                  </Card>
                </a>
              );
            }

            return (
              <Card key={index}>
                <CardContent className="p-6">
                  {content}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}