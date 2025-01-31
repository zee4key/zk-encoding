import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Code",
    title: "Interactive Coding Lessons",
    description:
      "Learn programming through hands-on, interactive coding exercises tailored for beginners and advanced learners.",
  },
  {
    icon: "Code",
    title: "Real-world Coding Challenges",
    description:
      "Practice solving practical coding problems that simulate real software development scenarios.",
  },
  {
    icon: "Code",
    title: "Comprehensive Curriculum",
    description:
      "Access a wide range of programming languages and technologies with structured, in-depth learning paths.",
  },
  {
    icon: "Code",
    title: "Video Tutorials",
    description:
      "Watch expert-led video tutorials that break down complex programming concepts into easy-to-understand segments.",
  },
  {
    icon: "Code",
    title: "Progress Tracking",
    description:
      "Monitor your learning progress, earn badges, and track your skill development in real-time.",
  },
  {
    icon: "Users",
    title: "Community Support",
    description:
      "Connect with fellow learners, collaborate on projects, and get help from experienced developers.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
