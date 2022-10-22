import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Background from "./components/sections/Background";
import Features from "./components/sections/Features";

const App = () => (
  <div className="h-15 bg-gradient-to-b from-neutral-900 to-neutral-800">
    <Background />
    <div className="container">
      <Header />
      <Hero />
      <Features />
    </div>
  </div>
);

export default App;
