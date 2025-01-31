import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, Clock } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
  verified: boolean;
}

interface CourseProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  language: string;
  author: Author;
}

export function CourseCard({ course }: { course: CourseProps }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
          <Badge variant="secondary" className="font-semibold">
            {course.language}
          </Badge>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Avatar>
            <AvatarImage src={course.author.avatar} alt={course.author.name} />
            <AvatarFallback>
              {course.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            <span className="text-sm font-medium">{course.author.name}</span>
            {course.author.verified && (
              <CheckCircle2 className="w-4 h-4 text-blue-500 ml-1" />
            )}
          </div>
        </div>
        <CardDescription className="mt-2 font-normal">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <div className="flex-grow bg-gray-400 h-2 rounded-full">
            <div
              className="bg-foreground h-2 rounded-full"
              style={{ width: `${(parseInt(course.duration) / 12) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-semibold">{course.duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-semibold">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
}
