"use client";

import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg0 flex flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 pt-24">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
