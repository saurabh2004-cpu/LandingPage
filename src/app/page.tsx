'use client'
import { HowItWorks } from "@/components/HowItWorks";
import { AboutUs } from "@/components/AboutUs";
import Rehabilitation from "@/components/Rehalibitation";
import { Pricing } from "@/components/Pricing";
import { TherapistTeam } from "@/components/TherapistTeam";
import { ClientTestimonials } from "@/components/clientTestimonials";
import NewsAndBlogs from "@/components/NewsAndBlogs";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>

        <>
         
          <Hero />
          <AboutUs />
          <Rehabilitation />
          <HowItWorks />
          <Pricing />
          <TherapistTeam title={'Our dedicated & experienced therapist team'} section="Therapist Team" />
          <ClientTestimonials />
          <NewsAndBlogs />
          {/* <Footer /> */}
        </>

    </>
  );
}
