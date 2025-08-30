import { Headset } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FormCreateInterview } from "./FormCreateInterview";

export function BtnCreateInterview() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full">
                Create Interview
            </Button>
            
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle className="flex gap-2 items-center text-purple-400">
                Start interview
                <Headset />  
            </DialogTitle>
            <FormCreateInterview />
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}
