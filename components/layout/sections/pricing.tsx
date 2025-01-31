import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 0,
    description: "Perfect for beginners learning to code",
    buttonText: "Start Learning",
    benefitList: [
      "Access to basic coding courses",
      "Community forum access",
      "Weekly coding challenges",
      "Beginner programming resources",
      "Limited AI code review",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 29,
    description: "Comprehensive coding education for serious learners",
    buttonText: "Unlock Pro Learning",
    benefitList: [
      "Full course library",
      "Advanced coding workshops",
      "Personal mentor sessions",
      "Certification tracks",
      "Unlimited AI code review",
      "Project portfolio support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 99,
    description: "Team and corporate coding education solutions",
    buttonText: "Contact Sales",
    benefitList: [
      "Team learning platform",
      "Custom curriculum design",
      "Enterprise-wide licenses",
      "Advanced analytics",
      "Dedicated support team",
      "Corporate training programs",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        ZK | Coding Academy
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learning Paths for Every Coder
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that accelerates your coding journey and skills
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Link href="/login" className="w-full">
                  <Button
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className="w-full"
                  >
                    {buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
