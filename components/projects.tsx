import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-[#1a1f2e] p-4">
        <Image
          src={image}
          alt={`Screenshot of ${title} project`}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent opacity-40" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 bg-background">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" className="rounded-full shadow-none" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Sociopedia",
      description:
        "A social media platform with strong authentication and authorization functionalities. Features include user post visibility controls, likes management, and an ad-free feed to enhance user experience. Built with MERN stack and RESTful architecture.",
      image: "/projects/sociopedia.svg",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
      liveUrl: "https://sociopedia-one.vercel.app/",
      githubUrl: "https://github.com/iamYashSinha/Sociopedia",
    },
    {
      title: "CryptoApp",
      description:
        "A cryptocurrency tracking application built with React.js and ChakraUI. Enables users to track real-time cryptocurrency exchanges, coins, and their performance. Integrated with CoinGecko API and Firebase for seamless data management.",
      image: "/projects/cryptoapp.svg",
      technologies: ["React.js", "ChakraUI", "Firebase", "CoinGecko API"],
      liveUrl: "https://shimmering-pika-1e5b23.netlify.app/",
      githubUrl: "https://github.com/iamYashSinha/Crypto-App",
    },
    {
      title: "Dynamic Survey Application",
      description:
        "A personalized form builder application with diverse question types. Features include response metrics monitoring, CSV export functionality, and an intuitive admin interface. Built with React.js and Firebase.",
      image: "/projects/survey-app.svg",
      technologies: ["React.js", "Firebase", "Material UI", "Apache E-Charts"],
      liveUrl: "https://onexam1.web.app/",
      githubUrl: "https://github.com/username/survey-app",
    },
    {
      title: "NewsApp",
      description:
        "A real-time news aggregator application that provides up-to-date news articles from various sources. Features include category-based filtering, search functionality, and responsive design for optimal viewing across devices.",
      image: "/projects/newsapp.svg",
      technologies: ["React.js", "News API", "Bootstrap", "Responsive Design"],
      liveUrl: "https://github.com/iamYashSinha/News-App",
      githubUrl: "https://github.com/iamYashSinha/News-App",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
