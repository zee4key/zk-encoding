"use client";

import { useState } from "react";
import { CourseCard } from "@/components/course-card";
import { CourseSearch } from "@/components/course-search";

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
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedLanguage ||
        selectedLanguage === "all" ||
        course.language === selectedLanguage)
  );

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
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
