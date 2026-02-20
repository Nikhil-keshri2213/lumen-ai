import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

import "./App.css"
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
