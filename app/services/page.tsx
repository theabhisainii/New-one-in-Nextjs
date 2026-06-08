import React from 'react'

const page = () => {
  return (
    <div>
      
      <section id="services" className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Services</p>
            <h3 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">What I can help you build.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Portfolio Sites</h4>
              <p className="mt-4 text-slate-600">Showcase your work with a responsive site that scales beautifully.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Landing Pages</h4>
              <p className="mt-4 text-slate-600">Launch a product or service quickly with a polished landing experience.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">App Prototypes</h4>
              <p className="mt-4 text-slate-600">Build a functional prototype for a web app or SaaS idea.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
