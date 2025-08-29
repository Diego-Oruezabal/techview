import { howItWorksData } from "./HowItWorks.data";

export function HowItWorks() {
  return (
   <section 
        className="py-24 bg-gradient-to-br from-purple-700/10 to-purple-900 text-white"
        id="how-it-works">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto">Get interview ready in just a few simple steps</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {howItWorksData.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-purple-950 border p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-purple-500 text-white text-2xl">
                                <step.icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-white bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold mb-2 absolute -top-4 -left-4 transform ">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{ step.title }</h3>
                            <p className="text-slate-300 leading-reñaxed">
                                { step.description }
                            </p>
                                
                            </div>
                        </div>
                    ))}

                </div>
            </div>

   </section>
  )
}
