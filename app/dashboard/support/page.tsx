import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Support</h2>
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            If you're experiencing technical difficulties, please fill out the form below and we'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="Your Email" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Textarea placeholder="Describe your issue" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

