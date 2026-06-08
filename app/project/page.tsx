import React from 'react'

const page = () => {
  return (
    <div>
      <section id="projects" className="border-t border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Projects</p>
            <h3 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Selected work</h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">React Portfolio</h4>
              <p className="mt-4 text-slate-600">A fully responsive portfolio built with React and Tailwind CSS.</p>
            </article>
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Next.js Blog</h4>
              <p className="mt-4 text-slate-600">A fast blog with SSG, SEO-friendly structure, and modern styling.</p>
            </article>
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Dashboard UI</h4>
              <p className="mt-4 text-slate-600">An admin dashboard prototype with clean layout and component structure.</p>
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page
