import React from 'react'

const page = () => {
  return (
    <div>
      <section id="about" className="border-t border-slate-200 bg-white/90 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">About Me</p>
            <h3 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">A developer who builds with clarity and care.</h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am a BCA student passionate about transforming ideas into real web experiences.
              My focus is on writing clean code, designing responsive interfaces, and delivering polished projects that solve real problems.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="text-xl font-semibold text-slate-900">Frontend Development</h4>
              <p className="mt-3 text-slate-600">Build dynamic interfaces using React, Next.js, and modern CSS tooling.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="text-xl font-semibold text-slate-900">UI / UX Design</h4>
              <p className="mt-3 text-slate-600">Create accessible and intuitive layouts that look great on every screen.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h4 className="text-xl font-semibold text-slate-900">Problem Solving</h4>
              <p className="mt-3 text-slate-600">Bring logical thinking and attention to detail to every project I deliver.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
