import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import { Landing } from "./components/landing";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Landing/>
      <AboutUs/> 
      <Footer/>
    </main>
  );
}
