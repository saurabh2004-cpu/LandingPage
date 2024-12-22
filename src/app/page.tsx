'use client'
import { HowItWorks } from "@/components/HowItWorks";
import Navbar from "../components/Navbar";
import { TopBar } from "../components/Topbar";
import { AboutUs } from "@/components/AboutUs";
import Rehabilitation from "@/components/Rehalibitation";
import { Pricing } from "@/components/Pricing";
import { TherapistTeam } from "@/components/TherapistTeam";
import { ClientTestimonials } from "@/components/clientTestimonials";
import { Footer } from "@/components/Footer";
import NewsAndBlogs from "@/components/NewsAndBlogs";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>

        <>
          <TopBar />
          <Navbar />
          <Hero />
          <AboutUs />
          <Rehabilitation />
          <HowItWorks />
          <Pricing />
          <TherapistTeam />
          <ClientTestimonials />
          <NewsAndBlogs />
          <Footer />
        </>

    </>
  );
}
