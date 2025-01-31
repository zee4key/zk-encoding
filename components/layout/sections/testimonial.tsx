"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}
const reviewList: ReviewProps[] = [
  {
    image: "https://avatars.githubusercontent.com/u/75042455?v=4",
    name: "Azamat Yerzhanov",
    userName: "Product Manager",
    comment:
      "ZK Coding Academy is fantastic! The courses are well-structured and the instructors are very knowledgeable. I've learned so much about programming.",
    rating: 5.0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/75042455?v=4",
    name: "Aizhan Nurmagambetova",
    userName: "Cybersecurity Analyst",
    comment:
      "The LMS platform at ZK Coding Academy is user-friendly and the content is top-notch. It's been a great experience learning here.",
    rating: 4.8,
  },
  {
    image: "https://avatars.githubusercontent.com/u/75042455?v=4",
    name: "Yerlan Kabulov",
    userName: "Chief Technology Officer",
    comment:
      "ZK Coding Academy offers a wide range of programming courses that are perfect for both beginners and advanced learners. Highly recommend!",
    rating: 4.9,
  },
  {
    image: "https://avatars.githubusercontent.com/u/75042455?v=4",
    name: "Nurbol Sarsenbayev",
    userName: "Data Scientist",
    comment:
      "I've taken several courses at ZK Coding Academy and each one has been excellent. The hands-on projects really help solidify the concepts.",
    rating: 5.0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/75042455?v=4",
    name: "Aigerim Zhakypova",
    userName: "IT Project Manager",
    comment:
      "The support from the instructors at ZK Coding Academy is amazing. They are always available to help and provide valuable feedback.",
    rating: 5.0,
  },
  {
    image: "https://avatars.githubusercontent.com/u/75042455?v=4",
    name: "Madina Tuleubayeva",
    userName: "DevOps Engineer",
    comment:
      "ZK Coding Academy has been a game-changer for my career. The skills I've learned here have helped me advance in my job.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
