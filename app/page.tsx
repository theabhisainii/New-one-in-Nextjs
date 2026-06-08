export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Theabhisainii</h1>
          <div className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-700">

          </div>
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-600">Web Developer & BCA Student</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Crafting fast, polished, and modern web experiences.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I build responsive web applications with clean UI, intuitive UX, and React/Next.js best practices.
              Currently focused on portfolio sites, SaaS prototypes, and interactive dashboards.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-600/10 to-slate-100 p-8 shadow-2xl shadow-slate-300/20 sm:p-10">
            <div className="mb-6 rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Quick Snapshot</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-slate-900">3+</p>
                  <p className="mt-2 text-sm text-slate-600">Years of practice</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-slate-900">10+</p>
                  <p className="mt-2 text-sm text-slate-600">Projects completed</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-950/95 p-6 text-white shadow-xl">
              <h3 className="text-xl font-semibold">Featured Skills</h3>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <span className="rounded-3xl bg-slate-800/80 px-4 py-3">React</span>
                <span className="rounded-3xl bg-slate-800/80 px-4 py-3">Next.js</span>
                <span className="rounded-3xl bg-slate-800/80 px-4 py-3">Tailwind CSS</span>
                <span className="rounded-3xl bg-slate-800/80 px-4 py-3">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="contact" className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-600 px-8 py-16 text-white shadow-2xl shadow-blue-500/20 sm:px-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Get in Touch</p>
            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">Let’s build something great together.</h3>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Whether you need a portfolio, landing page, or web app, I’d love to help bring your idea to life.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:abhishek@example.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-600/10 transition hover:bg-slate-100"
              >
                Email Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                See Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
