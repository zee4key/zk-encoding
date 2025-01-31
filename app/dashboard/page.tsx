"use client";

import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

// Mock data for performance metrics
const performanceData = [
  { month: "Jan", score: 85 },
  { month: "Feb", score: 82 },
  { month: "Mar", score: 88 },
  { month: "Apr", score: 90 },
  { month: "May", score: 85 },
  { month: "Jun", score: 92 },
];

const subjectPerformance = [
  { subject: "JavaScript", score: 85 },
  { subject: "React", score: 78 },
  { subject: "Node.js", score: 92 },
  { subject: "Python", score: 88 },
  { subject: "Database", score: 75 },
];

// Mock data for courses and statistics
const courses = [
  { id: 1, title: "Introduction to JavaScript", progress: 75 },
  { id: 2, title: "React Fundamentals", progress: 50 },
  { id: 3, title: "Node.js Backend Development", progress: 25 },
  { id: 4, title: "Python for Data Science", progress: 10 },
];

const statistics = [
  { title: "Courses Completed", value: "3", trend: "+1 this month" },
  { title: "Total Study Time", value: "45h", trend: "+5h this week" },
  { title: "Assignments Submitted", value: "12", trend: "+2 this week" },
  { title: "Average Score", value: "85%", trend: "+2% from last month" },
];

export default function DashboardPage() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`dashboard-page ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statistics.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Academic Performance Chart */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
            <CardDescription>
              Your performance over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Score",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Subject Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>Your performance by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Score",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="score"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Current Courses */}
      <h3 className="text-2xl font-bold tracking-tight mt-8">Your Courses</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <>
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </>
        ) : (
          courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>Progress: {course.progress}%</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="w-full" />
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
