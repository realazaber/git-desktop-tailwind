import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Card from "./components/Cards/Card";
import CardGroup from "./components/Cards/CardGroup";
import Background from "./components/sections/Background";

const App = () => (
  <div className="h-15 bg-gradient-to-b from-neutral-900 to-neutral-800">
    <Background />
    <Header />
    <Hero />
    <CardGroup>
      <Card title="title 1" body="body 1" />
      <Card title="title 2" body="body 2" />
      <Card title="title 3" body="body 3" />
    </CardGroup>
  </div>
);

export default App;
