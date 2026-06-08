"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-white">
            My Portfolio
          </Link>
          <button
            className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15 md:hidden"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>

        <div className={`flex flex-col gap-2 md:flex-row md:items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/" className="rounded-md px-4 py-2 text-sm text-white transition hover:bg-gray-700">
            Home
          </Link>
          <Link href="/about" className="rounded-md px-4 py-2 text-sm text-white transition hover:bg-gray-700">
            About Us
          </Link>
          <Link href="/services" className="rounded-md px-4 py-2 text-sm text-white transition hover:bg-gray-700">
            Services
          </Link>
          <Link href="/project" className="rounded-md px-4 py-2 text-sm text-white transition hover:bg-gray-700">
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15 md:inline-flex"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
