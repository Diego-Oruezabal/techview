"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { StatusFreeTrial } from "./StatusFreeTrial";
import { StatusPaid } from "./StatusPaid";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export function AccessStatus() {

    const [open, setOpen] = useState(false);

    const hasPaid = false;
    const statusFree = true;

    if(hasPaid) {
        return <StatusPaid />
    }

    if(statusFree) {
        return <StatusFreeTrial />
    }

    const handleOpenChange = () => {
        setOpen(!open);
    }

  return (
    <div className="p-4 bg-gray-800 rounded-md text-sm border border-white">
      <h3 className="font-semibold text-xl mb-1">
        🚫 Plan no activated
    </h3>
    <Badge className="w-full bg-red-700 py-1">
        Limited access
    </Badge>
    <p className="text-xs mt-2 mb-3">You have used your free trial</p>

    <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
            <Button className="w-full font-semibold" variant="secondary">
                Unlock now
            </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden ">
            <DialogHeader>
            <DialogTitle className="hidden">Purchase</DialogTitle>
            <div id="checkout-modal" className="min-h-[600px]"></div>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    </div>
  )
}
