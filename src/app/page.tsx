import { AboutUs } from "./components/AboutUs";
import { ContactForm } from "./components/ContactForm";
import { Landing } from "./components/landing";
import { OurServices } from "./components/OurServices";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Landing/>
      <AboutUs/> 
      <OurServices/>
      <ContactForm/>
    </main>
  );
}
