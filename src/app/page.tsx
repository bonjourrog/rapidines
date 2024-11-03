import Features from "./Components/Features";
import { Hero } from "./Components/Hero";
import Navbar from "./Components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}
