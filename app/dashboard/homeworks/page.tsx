"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  CheckCircle2,
  CircleDashed,
  Upload,
  FileText,
  Loader2,
} from "lucide-react";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

// Mock data for homeworks grouped by courses
const homeworksByCourse = [
  {
    courseName: "Introduction to JavaScript",
    homeworks: [
      {
        id: 1,
        title: "Variables and Data Types Quiz",
        dueDate: "2023-12-15",
        status: "completed",
      },
      {
        id: 2,
        title: "Functions and Scope Project",
        dueDate: "2023-12-20",
        status: "pending",
      },
    ],
  },
  {
    courseName: "React Fundamentals",
    homeworks: [
      {
        id: 3,
        title: "Component Lifecycle Essay",
        dueDate: "2023-12-18",
        status: "pending",
      },
      {
        id: 4,
        title: "State Management Exercise",
        dueDate: "2023-12-22",
        status: "pending",
      },
    ],
  },

  {
    courseName: "Node.js Backend Development",
    homeworks: [
      {
        id: 5,
        title: "RESTful API Design",
        dueDate: "2023-12-25",
        status: "pending",
      },
      {
        id: 6,
        title: "Database Integration Quiz",
        dueDate: "2023-12-28",
        status: "completed",
      },
    ],
  },
];

// Add submission state interface
interface HomeworkSubmission {
  id: number;
  fileName: string;
  submittedAt: string;
  status: "submitted" | "graded" | "pending";
  grade?: number;
  feedback?: string;
}

export default function HomeworksPage() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submissions, setSubmissions] = useState<HomeworkSubmission[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (
    homeworkId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    // Simulate file upload with actual file name
    setTimeout(() => {
      setSubmissions((prev) => [
        ...prev,
        {
          id: homeworkId,
          fileName: file.name,
          submittedAt: new Date().toISOString(),
          status: "submitted",
          fileSize: (file.size / 1024).toFixed(2) + " KB",
        },
      ]);
      setUploading(false);
      toast({
        title: "Success",
        description: "Homework has been uploaded successfully!",
        variant: "default",
      });
    }, 2000);
  };

  const getSubmissionStatus = (homeworkId: number) => {
    return submissions.find((sub) => sub.id === homeworkId);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Homeworks</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        onValueChange={setExpandedCourse}
      >
        {homeworksByCourse.map((course) => (
          <AccordionItem value={course.courseName} key={course.courseName}>
            <AccordionTrigger className="text-lg font-semibold">
              {course.courseName}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 mt-4">
                {course.homeworks.map((homework) => {
                  const submission = getSubmissionStatus(homework.id);
                  return (
                    <Card key={homework.id}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          {homework.title}
                        </CardTitle>
                        <Badge variant={submission ? "secondary" : "default"}>
                          {submission ? (
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                          ) : (
                            <CircleDashed className="mr-1 h-3 w-3" />
                          )}
                          {submission ? "Submitted" : "Pending"}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarIcon className="mr-1 h-4 w-4" />
                          Due: {homework.dueDate}
                        </div>

                        {submission ? (
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center text-sm">
                              <FileText className="mr-2 h-4 w-4" />
                              {submission.fileName}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Submitted on{" "}
                              {new Date(
                                submission.submittedAt
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        ) : (
                          <div className="mt-4">
                            <input
                              type="file"
                              id={`homework-${homework.id}`}
                              className="hidden"
                              accept=".pdf,.doc,.docx,.txt"
                              onChange={(e) => handleFileUpload(homework.id, e)}
                            />
                            <label
                              htmlFor={`homework-${homework.id}`}
                              className={`inline-flex items-center px-4 py-2 rounded-md cursor-pointer text-white`}
                            >
                              {uploading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <Upload className="mr-2 h-4 w-4" />
                                  Choose File & Upload
                                </>
                              )}
                            </label>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
