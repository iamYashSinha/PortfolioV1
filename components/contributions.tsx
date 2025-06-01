import { GithubLogo } from "./icons";
import Link from "next/link";

interface Contribution {
  date: string;
  title: string;
  description: string;
  pullRequestUrl: string;
}

const contributions: Contribution[] = [
  {
    date: "12 April, 2023",
    title: "GitHub duplication Fixed and Migration",
    description: 
      "Fixed a critical issue in the user authentication system where changing GitHub usernames led to duplicate document creation. Implemented a robust migration strategy to handle username updates by maintaining a single source of truth and updating all related references. This enhancement improved data consistency and prevented potential authentication conflicts.",
    pullRequestUrl: "https://github.com/Real-Dev-Squad/website-backend/pull/1044",
  },
  {
    date: "March 05, 2023",
    title: "Test cases for navbar component",
    description: 
      "Developed comprehensive test suite for the Navbar component using React Testing Library and Jest. Implemented tests for user interactions, responsive behavior, and accessibility features. Added snapshot tests for UI consistency and unit tests for navigation logic. This contribution improved code reliability with over 90% test coverage.",
    pullRequestUrl: "https://github.com/Real-Dev-Squad/website-status/pull/493",
  },
  {
    date: "Feb 21, 2023",
    title: "Search bar component",
    description: 
      "Engineered a reusable search bar component with advanced features including debounced input handling, keyboard navigation support, and dynamic search suggestions. Implemented efficient search algorithms with proper error handling and loading states. The component improved search performance and user experience across multiple sections of the application.",
    pullRequestUrl: "https://github.com/Real-Dev-Squad/website-calendar/pull/107",
  },
];

const ContributionCard = ({ date, title, description, pullRequestUrl }: Contribution) => (
  <div className="relative pl-12 before:absolute before:left-0 before:top-[50%] before:h-full before:w-[2px] before:-translate-y-1/2 before:bg-border last:before:hidden">
    <div className="absolute left-0 top-[50%] -translate-x-[45%] -translate-y-1/2 h-3 w-3 rounded-full bg-muted-foreground"></div>
    <div className="bg-accent/10 rounded-xl p-6 transition-colors hover:bg-accent/20">
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <span>{date}</span>
        <span>•</span>
        <div className="flex items-center gap-1">
          <GithubLogo className="h-4 w-4" />
          <span>GitHub</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        href={pullRequestUrl}
        className="inline-flex text-primary hover:text-primary/80 font-medium"
        target="_blank"
      >
        View Pull Request
      </Link>
    </div>
  </div>
);

const Contributions = () => {
  return (
    <section id="contributions" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Open Source Contributions
          </h2>
          <p className="text-muted-foreground text-lg mb-16">
            Contributing to the developer community through open source projects
          </p>
        </div>

        <div className="space-y-8">
          {contributions.map((contribution, index) => (
            <ContributionCard key={index} {...contribution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions; 