import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <Header />

      {/* Main Content */}
      <Home />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
