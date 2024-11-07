import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <div className="blob-outer-container md:rounded-[9999px] rounded-[9999px] md:blur-[321px] blur-[200px] opacity-[60] md:opacity-[0.5]">
      <div className="blob-inner-container">
        <div className="blob"></div>
      </div>
    </div>
    <NavBar />
    <main>
      <Home />
      <About />
      <Projects />
    </main>
    <Footer />
    </>
  );
}

export default App;
