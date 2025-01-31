"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Unleash the power of
              <span className="text-transparent px-2 bg-gradient-to-r from-[#16A6FF] to-[#FF58B4] bg-clip-text">
                programming 🚀
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`From Zero-Knowledge to Mastery: Your Path to Becoming a Software Developer`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/login" className="w-5/6 md:w-1/4 mx-auto md:mx-0">
              <Button className="text-lg px-6 py-3 font-bold group/arrow relative before:absolute before:inset-0 before:rounded-lg before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:bg-gradient-to-r before:from-[#16A6FF] before:to-[#FF58B4] before:blur-xl before:-z-10 ease-[cubic-bezier(0.95, 0.05, 0.795, 0.035)] transition-all duration-400 hover:scale-110 hover:bg-background hover:border-foreground hover:border hover:text-foreground">
                Get Started
                <ArrowRight className="size-6 ml-2 group-hover/arrow:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.png"
                : "/hero-image-dark.png"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
