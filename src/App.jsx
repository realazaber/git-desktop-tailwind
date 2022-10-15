import "./styles/main.css";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";

const App = () => (
  <div className="h-15 bg-gradient-to-b from-neutral-900 to-neutral-800">
    <Header />
    <Hero />
  </div>
);

export default App;
