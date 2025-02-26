import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-y-auto text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      {/* Background container */}
      <div className="relative min-h-screen w-full">
        {/* Background itself */}
        <div className="absolute inset-0 z-[-1] w-full min-h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>

        {/* Content container */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
        <Technologies />
        <Experience />
         <Projects />
         <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;