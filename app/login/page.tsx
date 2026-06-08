import React from "react";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="flex min-h-screen items-center justify-center px-6 py-16 sm:px-8 lg:px-10">
        <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white/95 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-200/20 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
            <div className="px-8 py-10 sm:px-10 sm:py-12">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                Login
              </span>
              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Welcome back!
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Sign in to continue to your dashboard and keep building your next project with a polished, responsive experience.
              </p>

              <form className="mt-10 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </form>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-tr from-blue-600 to-slate-900 p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_30%)]" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-100/80">Secure sign in</p>
                  <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">A cleaner login experience</h2>
                </div>

                <div className="space-y-4 rounded-3xl bg-white/10 p-5 text-sm text-blue-100 shadow-inner shadow-slate-950/10">
                  <div>
                    <p className="font-semibold">Fast access</p>
                    <p className="mt-1 text-blue-100/80">Login quickly with a smooth form and crisp layout.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Modern design</p>
                    <p className="mt-1 text-blue-100/80">Responsive styling that works beautifully on mobile and desktop.</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-100/80">Need help?</p>
                  <p className="mt-3 text-sm leading-6 text-blue-100/90">
                    If you have trouble signing in, double-check your email and password or contact support for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
