import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <>
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
