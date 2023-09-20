import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { HeaderSection } from "./imports.ts";

function App() {
  return (
    <section className="flex">
      <Navbar />
      <HeaderSection />
    </section>
  );
}

export default App;
