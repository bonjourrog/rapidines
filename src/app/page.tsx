'use client'
import { useEffect } from "react";
import Features from "./Components/Features";
import { Hero } from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Howitworks from "./Components/HIW";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 500
    });
  },[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Services/>
      <Howitworks/>
    </div>
  );
}
