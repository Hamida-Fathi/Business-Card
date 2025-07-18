import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[317px] bg-[#1A1B21] text-white  box-border p-0 rounded-lg h-[780px] inter">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
