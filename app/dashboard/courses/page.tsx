"use client";

import { useState, useEffect } from "react";
import { CourseCard } from "@/components/course-card";
import { CourseSearch } from "@/components/course-search";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "TypeScript",
  "Swift",
  "Kotlin",
  "PHP",
];

const courses = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming",
    duration: "4 weeks",
    language: "JavaScript",
    author: {
      name: "John Doe",
      avatar: "/avatars/john-doe.jpg",
      verified: true,
    },
    steps: [
      "Introduction to Variables and Data Types",
      "Control Flow and Functions",
      "DOM Manipulation",
      "Asynchronous Programming",
    ],
  },
  {
    id: 2,
    title: "React Fundamentals",
    description: "Build modern UIs with React",
    duration: "6 weeks",
    language: "JavaScript",
    author: {
      name: "Jane Smith",
      avatar: "/avatars/jane-smith.jpg",
      verified: true,
    },
    steps: [
      "React Components and Props",
      "State and Lifecycle",
      "Hooks and Context",
      "Routing and Navigation",
      "State Management",
      "Testing React Apps",
    ],
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    description: "Create scalable backend applications",
    duration: "8 weeks",
    language: "JavaScript",
    author: {
      name: "Bob Johnson",
      avatar: "/avatars/bob-johnson.jpg",
      verified: false,
    },
    steps: [
      "Node.js Basics",
      "Express.js Framework",
      "Database Integration",
      "Authentication & Authorization",
      "API Development",
      "Error Handling",
      "Deployment",
      "Performance Optimization",
    ],
  },
  {
    id: 4,
    title: "Python for Data Science",
    description: "Explore data analysis with Python",
    duration: "10 weeks",
    language: "Python",
    author: {
      name: "Alice Brown",
      avatar: "/avatars/alice-brown.jpg",
      verified: true,
    },
    steps: [
      "Python Fundamentals",
      "NumPy and Pandas",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning Basics",
      "Data Cleaning",
      "Feature Engineering",
      "Model Deployment",
      "Advanced Analytics",
      "Project Work",
    ],
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    description: "Become a full stack developer",
    duration: "12 weeks",
    language: "JavaScript",
    author: {
      name: "Charlie Green",
      avatar: "/avatars/charlie-green.jpg",
      verified: true,
    },
    steps: [
      "HTML & CSS Fundamentals",
      "JavaScript Essentials",
      "Frontend Frameworks",
      "Backend Development",
      "Database Design",
      "API Integration",
      "Authentication",
      "Deployment",
      "Testing",
      "Security",
      "Performance",
      "Final Project",
    ],
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps",
    duration: "8 weeks",
    language: "JavaScript",
    author: {
      name: "Diana White",
      avatar: "/avatars/diana-white.jpg",
      verified: false,
    },
    steps: [
      "React Native Basics",
      "Navigation",
      "UI Components",
      "State Management",
      "Native Modules",
      "API Integration",
      "App Publishing",
      "Performance Optimization",
    ],
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCourse, setCurrentCourse] = useState<number | null>(null);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const [courseRating, setCourseRating] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    if (currentCourse) {
      const timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [currentCourse]);

  // Add in the course view
  <div className="mt-4">
    <h4>Rate this course:</h4>
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setCourseRating(star);
            setIsLoading(false);
          }, 500);
        }}
      >
        {star <= (courseRating || 0) ? "★" : "☆"}
      </button>
    ))}
  </div>;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const startCourse = (courseId: number) => {
    setCurrentCourse(courseId);
    // Fake loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (currentCourse) {
    const course = courses.find((c) => c.id === currentCourse);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">{course?.title}</h2>
          <Button
            onClick={() => setCurrentCourse(null)}
            className="px-4 py-2   rounded-md"
          >
            Back to Courses
          </Button>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Course Steps:</h3>
          {course?.steps.map((step, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg cursor-pointer ${
                stepProgress >= index ? "bg-green-500" : ""
              }`}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setStepProgress(index);
                  setIsLoading(false);
                }, 800);
              }}
            >
              {stepProgress >= index ? "✓ " : ""}
              {step}
            </div>
          ))}
          {course && stepProgress === course.steps.length - 1 && (
            <Button
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setCertificateGenerated(true);
                  setIsLoading(false);
                }, 1500);
              }}
            >
              Generate Certificate
            </Button>
          )}
        </div>
      </div>
    );
  }
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedLanguage ||
        selectedLanguage === "all" ||
        course.language === selectedLanguage)
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-[150px]" />
        <Skeleton className="h-12 w-full" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
      <CourseSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        programmingLanguages={programmingLanguages}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div key={course.id} onClick={() => startCourse(course.id)}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}
