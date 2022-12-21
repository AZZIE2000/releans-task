import Home from "./pages/Home";
import AOS from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
