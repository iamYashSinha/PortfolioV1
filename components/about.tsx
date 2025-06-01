import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Building Scalable & Event-Driven Systems
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              I'm a Software Engineer at AppDirect, specializing in Java, Spring Boot, Node.js, GraphQL, and REST APIs. 
              My expertise includes implementing search ranking algorithms, optimizing API performance, 
              and building event-driven architectures. I have a strong foundation in data structures, 
              algorithms, and object-oriented programming. I'm passionate about creating efficient solutions 
              and continuously learning new technologies. With experience in both backend systems and 
              frontend development, I bring a full-stack perspective to solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full" asChild>
                <a href="https://github.com/iamYashSinha" target="_blank" rel="noopener noreferrer">
                  <GithubLogo className="mr-2" />
                  View Github
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/assets/YashSinha_SDE1.pdf" download>
                  <Download className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image 
        src="/assets/profile.jpg" 
        alt="Yash Sinha" 
        className="object-cover" 
        fill 
        priority
      />
    </div>
  </div>
);

export default About;
