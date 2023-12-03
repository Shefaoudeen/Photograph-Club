import Home from "./Pages/Home";
import College from "./Pages/College";
import Contact from "./Pages/Contact";
import Officer from "./Pages/Officer";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";

export default function App() {
  return (
    <main className="scroll-smooth focus:scroll-auto">
      <section className="">
        <Home />
      </section>
      <section className="">
        <College />
      </section>
      <section className="">
        <Officer />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  );
}
