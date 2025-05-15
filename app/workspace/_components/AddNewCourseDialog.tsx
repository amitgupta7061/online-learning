"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Sparkle } from "lucide-react";
import { useState } from "react";

// Step 1: Define the form data type
interface CourseFormData {
  courseName: string;
  description?: string;
  noOfChapter: number;
  includeVideo: boolean;
  level: "beginner" | "moderate" | "advanced";
  category: string;
}

// Step 2: Component definition
const AddNewCourseDialog = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formData, setFormData] = useState<CourseFormData>({
    courseName: "",
    description: "",
    noOfChapter: 0,
    includeVideo: false,
    level: "beginner",
    category: "",
  });

  // Step 3: Typed handler function
  const onHandleInputChange = <K extends keyof CourseFormData>(
    field: K,
    value: CourseFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGenerate = () => {
    console.log(formData);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-4 mt-3">
              <div className="flex flex-col gap-0.5">
                <label>Course Name</label>
                <Input
                  placeholder="Enter course name"
                  onChange={(e) =>
                    onHandleInputChange("courseName", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label>Course Description (Optional)</label>
                <Textarea
                  placeholder="Enter course description"
                  onChange={(e) =>
                    onHandleInputChange("description", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label>Number of Chapters</label>
                <Input
                  placeholder="Enter number of chapters"
                  type="number"
                  onChange={(e) =>
                    onHandleInputChange("noOfChapter", Number(e.target.value))
                  }
                />
              </div>
              <div className="flex gap-3 items-center">
                <label>Include video</label>
                <Switch
                  checked={formData.includeVideo}
                  onCheckedChange={(checked) =>
                    onHandleInputChange("includeVideo", checked)
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label>Difficulty Level</label>
                <Select
                  onValueChange={(value) =>
                    onHandleInputChange(
                      "level",
                      value as CourseFormData["level"]
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficulty level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-0.5">
                <label>Category</label>
                <Input
                  placeholder="Enter category"
                  onChange={(e) =>
                    onHandleInputChange("category", e.target.value)
                  }
                />
              </div>
              <div className="mt-5">
                <Button className="w-full" onClick={onGenerate}>
                  <Sparkle className="mr-2 h-4 w-4" />
                  Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCourseDialog;
