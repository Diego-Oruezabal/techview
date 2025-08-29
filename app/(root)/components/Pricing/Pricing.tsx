import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { pricingPlans } from "./Pricing.data";





export function Pricing() {
  return (
  <section 
    className="py-24 bg-gradient-to-b from-purple-700/10 to-purple-900"
    id="pricing">
        <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
                <h2>
                    <span className="text-3xl md:text-4xl font-extrabold">
                        Choose the plan that’s right for you.
                    </span>
                </h2>
                <p className="mt-4 text-lg text-gray-400 mx-auto max-w-2xl">
                    Start free, then add a site plan to go live.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
                <Card
                key={index} 
                className={`relative group hover:shadow-xl transition-all duration-300 
                    p-2 rounded-md border text-purple-200 ${
                    plan.popular
                        ? "bg-purple-900/70 border-purple-400/30"
                        : "bg-purple-600/20 border-purple-400/30"
                    }`}
                >
                    {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="inline-flex items-center gap-2 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                            Most Popular
                            </span>
                        </div>
                    )}
                    <CardHeader className="text-center pt-6">
                        <CardTitle className="text-2xl font-bold mb-2">
                            {plan.name}
                        </CardTitle>
                        <p className="text-3xl font-extrabold">
                            {plan.price}
                        </p>
                        <p className="mt-2 text-gray-400">
                            {plan.description}
                        </p>
                    </CardHeader>

                    <CardContent className="sspace-y-6">
                        <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-400" />
                                    <span>{feature}</span>
                                </li>
                            ))}

                        </ul>
                        <Button
                        size="lg"
                        className={`w-full font-semibold ${
                            plan.popular
                        ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                        : "bg-purple-600 hover:bg-purple-800 text-white border border-prurple-400/20"
                        }`}
                            >
                            
                                {plan.buttonText}
                          
                        </Button>
                    </CardContent>
                </Card>
            ))}
            </div>

        </div>
  </section>
  )
}
