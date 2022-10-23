import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Background from "./components/sections/Background";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";

const App = () => (
  <div className="h-[15%] bg-gradient-to-b from-[#191c20] to-[#24292e]">
    <Background />
    <div className="container">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  </div>
);

export default App;
