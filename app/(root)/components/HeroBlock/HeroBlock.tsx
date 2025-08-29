"use client"

import { TypeAnimation } from "react-type-animation";

import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroBlock() {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center">Practice real interviews in
                <span className="inline-block bg-indigo-500 text-white shadow-[0_0_20px_#6366f1]">

                    <TypeAnimation
                    sequence={[
                        1000, 'Frontend 🥸',
                        1000, 'Backend 💻',
                        1000, 'Mobile 📱',
                        1000, 'DevOps 🚀',
                        1000, 'Fullstack 🌐',
                        1000, 'Data Science 📊',
                        1000, 'Machine Learning 🤖',
                    ]}
                    wrapper="span"
                    speed={70}
                    className="text-5xl md:text-6xl font-extrabold tracking-tight text-center inline-block"
                    repeat={Infinity}
                    />
                </span>    
            </h1>

            <p className="text-indigo-100 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto loading-relaxed text-center">
                TechView is an interview practice platform that helps you ace your next tech interview with confidence and ease.
            </p>

            <div className="flex items-center justify-center pb-5">
                <Button 
                size="lg" 
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center gap-2"
                asChild>
                    <Link href="/dashboard" className="flex items-center gap-2">
                        Get Started
                     <Sparkles className="group-hover:rotate-12 transition-transform h-5 w-5 text-white animate-pulse" />
                    </Link>
                </Button>

            </div>
            <div className="flex items-center gap-8 text-sm text-slate-200 justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"/>
                     5+ interview types
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"/>
                     No credit card required
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"/>
                     Instant feedback
                </div>

            </div>
        </div> 
    </section>
  )
}
