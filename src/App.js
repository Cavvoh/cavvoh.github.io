import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <div className="blob-outer-container opacity-[1] md:opacity-[0.6]">
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
