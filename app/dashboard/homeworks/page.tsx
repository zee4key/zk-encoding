'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, CheckCircle2, CircleDashed } from 'lucide-react'

// Mock data for homeworks grouped by courses
const homeworksByCourse = [
  {
    courseName: "Introduction to JavaScript",
    homeworks: [
      { id: 1, title: "Variables and Data Types Quiz", dueDate: "2023-12-15", status: "completed" },
      { id: 2, title: "Functions and Scope Project", dueDate: "2023-12-20", status: "pending" },
    ]
  },
  {
    courseName: "React Fundamentals",
    homeworks: [
      { id: 3, title: "Component Lifecycle Essay", dueDate: "2023-12-18", status: "pending" },
      { id: 4, title: "State Management Exercise", dueDate: "2023-12-22", status: "pending" },
    ]
  },
  {
    courseName: "Node.js Backend Development",
    homeworks: [
      { id: 5, title: "RESTful API Design", dueDate: "2023-12-25", status: "pending" },
      { id: 6, title: "Database Integration Quiz", dueDate: "2023-12-28", status: "completed" },
    ]
  },
]

export default function HomeworksPage() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Homeworks</h2>
      <Accordion type="single" collapsible className="w-full" onValueChange={setExpandedCourse}>
        {homeworksByCourse.map((course) => (
          <AccordionItem value={course.courseName} key={course.courseName}>
            <AccordionTrigger className="text-lg font-semibold">
              {course.courseName}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 mt-4">
                {course.homeworks.map((homework) => (
                  <Card key={homework.id} className={expandedCourse === course.courseName ? "transform transition-all duration-200" : ""}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {homework.title}
                      </CardTitle>
                      <Badge variant={homework.status === 'completed' ? 'secondary' : 'default'}>
                        {homework.status === 'completed' ? (
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                        ) : (
                          <CircleDashed className="mr-1 h-3 w-3" />
                        )}
                        {homework.status}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        Due: {homework.dueDate}
                      </div>
                      <Button className="mt-4" variant={homework.status === 'completed' ? 'outline' : 'default'}>
                        {homework.status === 'completed' ? 'View Submission' : 'Start Assignment'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

