import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CourseSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedLanguage: string | null;
  setSelectedLanguage: (language: string | null) => void;
  programmingLanguages: string[];
}

export function CourseSearch({ 
  searchTerm, 
  setSearchTerm, 
  selectedLanguage, 
  setSelectedLanguage, 
  programmingLanguages 
}: CourseSearchProps) {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex-grow">
        <Label htmlFor="search" className="font-semibold">Search Courses</Label>
        <Input 
          id="search"
          placeholder="Search courses..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-1"
        />
      </div>
      <div className="w-full md:w-64">
        <Label htmlFor="language-select" className="font-semibold">Programming Language</Label>
        <Select 
          value={selectedLanguage || "all"} 
          onValueChange={(value) => setSelectedLanguage(value === "all" ? null : value)}
        >
          <SelectTrigger id="language-select" className="mt-1">
            <SelectValue placeholder="All Languages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Languages</SelectItem>
            {programmingLanguages.map(lang => (
              <SelectItem key={lang} value={lang}>{lang}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

