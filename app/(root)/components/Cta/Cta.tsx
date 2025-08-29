import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'
export function Cta() {
  return (
    <section className='py-24 bg-gradient-to-br from-purple-800/5 to-purple-600/20 text-center text-white' id="cta">
        <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center space-y-8'>
                <div className='space-y-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                        Ready to Ace <br /> Your Interviews?
                    </h2>
                    <p className='text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>Join thousands of developers who
                        are transforming their interview preparation with TechView. Your journey to success today!
                    </p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button size="lg" className="group mt-8" variant="secondary">
                    <Sparkles className='group-hover:rotate-12 transition-transform'/>
                    Start Free Trial
                    <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1'/>
                </Button>
            </div>

            <div className='grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50'>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>10K+</div>
                    <div className='text-slate-200'>Developers Trained</div>
                </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>93%</div>
                    <div className='text-slate-200'>Success Rate</div>
                </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary mb-2'>500+</div>
                    <div className='text-slate-200'>Companies Hiring</div>
                </div>

            </div>

        </div>

    </section>
  )
}
