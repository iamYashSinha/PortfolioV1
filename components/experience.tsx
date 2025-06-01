import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer-I",
      company: "AppDirect",
      period: "08/2024 - Current",
      description:
        "Built & Optimized GraphQL & REST APIs using Java and Spring Boot, reducing response time by 40%. Implemented Search Ranking using Elasticsearch queries leveraging rank_feature and script_score to optimize product search rankings. Integrated Kafka for Event-Driven Architecture, migrating from PubSub to Kafka for improved scalability.",
      technologies: ["Java", "Spring Boot", "GraphQL", "Elasticsearch", "Kafka", "REST APIs"],
    },
    {
      title: "Software Engineer Intern",
      company: "AppDirect",
      period: "02/2024 - 08/2024",
      description:
        "Optimized JPA Query Performance by refactoring complex JDBC queries to Spring Data JPA specifications. Enhanced Data Synchronization by configuring and maintaining Debezium connectors for real-time data capture. Increased test coverage from 70% to 90% through unit and integration tests.",
      technologies: ["Java", "Spring Data JPA", "Debezium", "Unit Testing", "Integration Testing"],
    },
    {
      title: "Software Development Intern",
      company: "Digilytics Systems",
      period: "07/2023 - 12/2023",
      description:
        "Designed and built a dynamic survey application for personalized forms with diverse question types using React.js, Firebase, Material UI, and Apache E-Charts. Created an admin interface to monitor response metrics and download responses in CSV format.",
      technologies: ["React.js", "Firebase", "Material UI", "Apache E-Charts"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
